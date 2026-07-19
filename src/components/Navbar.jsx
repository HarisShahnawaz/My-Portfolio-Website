import React, { useState } from 'react'
import { navMenu } from '../assets/asstes'
import { FaArrowRight, FaSun, FaMoon, FaBars, FaXmark } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handles nav link clicks on mobile: closes the drawer first,
  // then scrolls to the target section once the collapse animation finishes.
  // This avoids the race condition where the browser's native anchor jump
  // fires while the drawer is still animating (which was causing it to
  // land on the Home section instead of the clicked one).
  const handleNavClick = (e, item) => {
    e.preventDefault()
    const targetId = item.toLowerCase()
    setIsMenuOpen(false)
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }, 250) // must be >= drawer exit animation duration (0.2s)
  }

  return (
   <div className='fixed w-full py-4 z-50 bg-theme-bg/85 backdrop-blur-md border-b border-theme-border/50 shadow-sm'>
        <div className='max-w-7xl mx-auto px-6'>
         <div className='flex justify-between items-center'>
            
            {/* logo */}
            <div className='text-2xl font-bold text-theme-text'>
                <span className='text-theme-accent font-orbitron'>Haris-</span>
                <span className='text-theme-accent font-orbitron'>Shahnawaz</span>
            </div>

            {/* Menu */}
            <div className='hidden md:flex space-x-8 border border-theme-border rounded-full px-10 py-4 bg-theme-bg-sec/50 backdrop-blur-sm'>
              {navMenu.map((item, index) => (
                <a 
                  key={index} 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className='text-theme-text-sec hover:text-theme-accent font-semibold transition duration-300'
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Resume Button */}
            <div className='flex items-center gap-3'>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className='p-3 border border-theme-border rounded-full cursor-pointer text-theme-text-sec hover:text-theme-accent hover:border-theme-accent hover:scale-[1.03] transition-all duration-200 flex items-center justify-center bg-theme-bg-sec shadow-xs w-11 h-11'
              >
                {theme === 'dark' ? (
                  <FaSun className='text-yellow-400 text-lg' />
                ) : (
                  <FaMoon className='text-zinc-600 text-lg' />
                )}
              </button>

              <a href='/resume.pdf' target='_blank' rel='noreferrer' className='hidden sm:block'>
                <button className='px-6 md:px-8 py-3 border border-theme-border rounded-full flex items-center gap-2 cursor-pointer text-theme-text-sec hover:text-theme-text hover:bg-theme-bg-sec hover:scale-[1.03] transition-all duration-200 shadow-xs font-semibold min-h-[44px]'>
                  Resume
                  <FaArrowRight className='text-sm'/>
                </button>
              </a>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setIsMenuOpen(prev => !prev)}
                className='md:hidden p-3 border border-theme-border rounded-full cursor-pointer text-theme-text-sec hover:text-theme-accent hover:scale-[1.03] transition-all duration-200 flex items-center justify-center bg-theme-bg-sec shadow-xs w-11 h-11'
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FaXmark className='text-lg' /> : <FaBars className='text-lg' />}
              </button>
            </div>

         </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className='md:hidden absolute top-[77px] left-0 w-full bg-theme-bg border-b border-theme-border shadow-md overflow-hidden z-40'
            >
              <div className='flex flex-col px-6 py-6 space-y-3'>
                {navMenu.map((item, index) => (
                  <a 
                    key={index} 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className='text-theme-text-sec hover:text-theme-accent font-semibold py-2.5 text-lg border-b border-theme-border/30 last:border-b-0 min-h-[44px] flex items-center transition-colors duration-200'
                  >
                    {item}
                  </a>
                ))}
                
                <a href='/resume.pdf' target='_blank' rel='noreferrer' className='sm:hidden pt-2'>
                  <button className='w-full py-3.5 border border-theme-border rounded-full flex items-center justify-center gap-2 cursor-pointer text-theme-text-sec hover:text-theme-text hover:bg-theme-bg-sec font-semibold min-h-[44px] shadow-xs'>
                    Resume
                    <FaArrowRight className='text-sm'/>
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}

export default Navbar