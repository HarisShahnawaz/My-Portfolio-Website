import React from 'react'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa6'
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

          {/* Text Section */}
          <div className='text-center lg:text-left'>

            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6'>
              <span className='w-2 h-2 bg-teal-500 rounded-full animate-pulse'></span>
              Available for Internship
            </div>

            <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold mb-4'>
              <span className='text-zinc-800 font-orbitron'>Hi, I'm Haris</span>
              <br />
              <span className='text-cyan-700 font-orbitron text-2xl sm:text-3xl md:text-5xl'>
                MERN Stack Developer
              </span>
            </h1>

            <p className='text-lg text-zinc-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-7'>
              I build full-stack web applications from frontend to backend —
              crafting responsive UIs with <strong>React</strong> and powering
              them with <strong>Node.js</strong>, <strong>Express</strong> &{' '}
              <strong>MongoDB</strong>.
            </p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8'>
              <a href='#work'>
                <button className='flex gap-2 items-center px-10 py-4 bg-zinc-800 rounded-full text-slate-200 hover:bg-black hover:text-white transition duration-300 cursor-pointer'>
                  View My Work
                  <FaArrowRight />
                </button>
              </a>
              <a href='#contact'>
                <button className='flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer'>
                  Contact Me
                  <FaArrowRight />
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className='flex items-center justify-center lg:justify-start gap-4'>
              <a href='https://github.com/HarisShahnawaz'
                target='_blank'
                rel='noreferrer'
                className='text-zinc-500 hover:text-zinc-900 transition duration-300'
              >
                <FaGithub className='text-2xl' />
              </a>
              
               <a href='https://www.linkedin.com/in/haris-shahnawaz-670aa8291/'
                target='_blank'
                rel='noreferrer'
                className='text-zinc-500 hover:text-cyan-700 transition duration-300'
              >
                <FaLinkedin className='text-2xl' />
              </a>
              <span className='w-px h-5 bg-zinc-300'></span>
              <span className='text-sm text-zinc-500'>Based in Pakistan 🇵🇰</span>
            </div>

          </div>

          {/* Image Section */}
          <div className='flex justify-center'>
            <div className='relative w-72 h-72 sm:w-80 sm:h-80 floating'>
              <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow'>
                <img
                  className='w-full h-full object-cover object-top'
                  src={assets.profileImg}
                  alt='Haris Shahnawaz'
                />
              </div>

              {/* Experience badge */}
              <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-slate-600/20 overflow-hidden p-3 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-white'>1+</div>
                  <div className='text-sm text-zinc-300'>Years Exp</div>
                </div>
              </div>

              {/* Stack badge */}
              <div className='absolute -top-4 -left-4 px-3 py-2 bg-white border border-zinc-200 rounded-xl shadow-md'>
                <div className='text-xs font-semibold text-zinc-700'>⚡ MERN Stack</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero