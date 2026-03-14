import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-12 border-t border-zinc-200 group hover:bg-black transition duration-500'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          
          {/* logo */}
          <div className='mb-6 md:mb-0'>
            <span className='uppercase text-2xl font-bold text-teal-800 font-orbitron group-hover:text-teal-400 transition duration-500 cursor-pointer'>
              Haris-Shahnawaz
            </span>
          </div>

          {/* copyright */}
          <p className='text-sm text-zinc-500 group-hover:text-zinc-400 transition duration-500'>
            © 2026 Haris Shahnawaz Coding. All rights reserved.
          </p>

          {/* social icons */}
          <div className='flex space-x-6 mb-6 md:mb-0'>
            <a href='https://github.com/HarisShahnawaz' target='_blank' rel='noreferrer'
              className='p-2 rounded-full hover:bg-zinc-800 transition duration-300'>
              <FaGithub className='text-2xl text-zinc-600 group-hover:text-white hover:text-white transition duration-300'/>
            </a>
            <a href='https://www.linkedin.com/in/haris-shahnawaz-670aa8291/' target='_blank' rel='noreferrer'
              className='p-2 rounded-full hover:bg-zinc-800 transition duration-300'>
              <FaLinkedin className='text-2xl text-zinc-600 group-hover:text-white hover:text-blue-400 transition duration-300'/>
            </a>
            <a href='https://www.instagram.com/shahnawaz.haris/' target='_blank' rel='noreferrer'
              className='p-2 rounded-full hover:bg-zinc-800 transition duration-300'>
              <FaInstagram className='text-2xl text-zinc-600 group-hover:text-white hover:text-pink-400 transition duration-300'/>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer