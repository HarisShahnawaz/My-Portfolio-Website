import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { assets } from '../assets/asstes'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    id='home' 
    className='flex flex-col pt-20 pb-40 lg:pb-10'
  >
    <div className='max-w-7xl mx-auto px-6 py-8 sm:py-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
       <div className='text-center lg:text-left'>
         <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold mb-6'>
            <span className='text-zinc-700 font-orbitron'>FullStack Developer</span>
            <br />
            <span className='text-cyan-700 font-orbitron text-2xl sm:text-3xl md:text-4xl'>React & NodeJs</span>
          </h1> 
          <p className='text-xl text-zinc-900 mb-6'>
            I build fast, beautiful websites using React and Node.js.
          </p>
          <div className='flex flex-col md:flex-row items-center gap-4'>
            
            {/* View My Work button */}
            <a href='#work'>
              <button className='flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer'>
                View My Work
                <FaArrowRight/>
              </button>
            </a>

            {/* Contact Me button */}
            <a href='#contact'>
              <button className='flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer'>
                Contact Me
                <FaArrowRight/>
              </button>
            </a>

          </div>
        </div>

        {/* image section right side */}
        <div className='flex justify-center'>
          <div className='relative w-72 h-72 sm:w-80 sm:h-80 floating'>
            <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow'>
              <img className='w-full h-full object-cover' src={assets.profileImg} alt="" />
            </div>
            <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-slate-600/20 overflow-hidden p-3'>
              <div className='w-full h-full items-center justify-center'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-white'>1+</div>
                  <div className='text-sm text-white'>years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </motion.div>
  )
}

export default Hero