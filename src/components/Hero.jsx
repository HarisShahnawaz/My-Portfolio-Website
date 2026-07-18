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
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-theme-accent/10 border border-theme-accent/25 rounded-full text-theme-accent text-sm font-medium mb-6'>
              <span className='w-2 h-2 bg-theme-accent rounded-full animate-pulse'></span>
              Available for Internship
            </div>

            <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold mb-4'>
              <span className='text-theme-text font-orbitron'>Hi, I'm Haris</span>
              <br />
              <span className='text-theme-accent font-orbitron text-2xl sm:text-3xl md:text-5xl'>
                MERN Stack Developer
              </span>
            </h1>

            <p className='text-lg text-theme-text-sec mb-8 max-w-lg mx-auto lg:mx-0 leading-7'>
              I build full-stack web applications from frontend to backend —
              crafting responsive UIs with <strong className='text-theme-text'>React</strong> and powering
              them with <strong className='text-theme-text'>Node.js</strong>, <strong className='text-theme-text'>Express</strong> &{' '}
              <strong className='text-theme-text'>MongoDB</strong>.
            </p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8'>
              <a href='#work'>
                <button className='flex gap-2 items-center px-10 py-4 bg-theme-btn rounded-full text-theme-btn-text hover:bg-theme-btn-hover hover:scale-[1.03] hover:shadow-md transition-all duration-200 cursor-pointer font-semibold'>
                  View My Work
                  <FaArrowRight />
                </button>
              </a>
              <a href='#contact'>
                <button className='flex items-center gap-2 border border-theme-border rounded-full px-10 py-4 text-theme-text hover:border-theme-accent hover:bg-theme-bg-sec hover:scale-[1.03] hover:shadow-xs transition-all duration-200 cursor-pointer font-semibold'>
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
                className='text-theme-text-muted hover:text-theme-text transition duration-300'
              >
                <FaGithub className='text-2xl' />
              </a>
              
               <a href='https://www.linkedin.com/in/haris-shahnawaz-670aa8291/'
                target='_blank'
                rel='noreferrer'
                className='text-theme-text-muted hover:text-theme-accent transition duration-300'
              >
                <FaLinkedin className='text-2xl' />
              </a>
              <span className='w-px h-5 bg-theme-border'></span>
              <span className='text-sm text-theme-text-muted'>Based in Pakistan 🇵🇰</span>
            </div>

          </div>

          {/* Image Section */}
          <div className='flex justify-center'>
            <div className='relative w-72 h-72 sm:w-80 sm:h-80 floating'>
              <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-theme-border shadow-sm glow'>
                <img
                  className='w-full h-full object-cover object-top'
                  src={assets.profileImg}
                  alt='Haris Shahnawaz'
                />
              </div>

              {/* Experience badge */}
              <div className='absolute -bottom-6 -right-6 w-32 h-32 rounded-xl border border-theme-border overflow-hidden p-3 flex items-center justify-center bg-theme-card/85 backdrop-blur-md shadow-xs'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-theme-text'>1+</div>
                  <div className='text-sm text-theme-text-sec'>Years Exp</div>
                </div>
              </div>

              {/* Stack badge */}
              <div className='absolute -top-4 -left-4 px-3 py-2 bg-theme-card border border-theme-border rounded-xl shadow-xs'>
                <div className='text-xs font-semibold text-theme-text'>⚡ MERN Stack</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero