import React from 'react'
import { navMenu } from '../assets/asstes'
import { FaArrowRight, FaSun, FaMoon } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

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
                className='p-3.5 border border-theme-border rounded-full cursor-pointer text-theme-text-sec hover:text-theme-accent hover:border-theme-accent hover:scale-[1.03] transition-all duration-200 flex items-center justify-center bg-theme-bg-sec shadow-xs'
              >
                {theme === 'dark' ? (
                  <FaSun className='text-yellow-400 text-lg' />
                ) : (
                  <FaMoon className='text-zinc-600 text-lg' />
                )}
              </button>

              <a href='/resume.pdf' target='_blank' rel='noreferrer'>
                <button className='px-6 md:px-8 py-3.5 border border-theme-border rounded-full flex items-center gap-2 cursor-pointer text-theme-text-sec hover:text-theme-text hover:bg-theme-bg-sec hover:scale-[1.03] transition-all duration-200 shadow-xs font-semibold'>
                  Resume
                  <FaArrowRight className='text-sm'/>
                </button>
              </a>
            </div>

         </div>
        </div>
    </div>
  )
}

export default Navbar