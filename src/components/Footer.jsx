import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-12 border-t border-zinc-200 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>

          {/* Logo */}
          <span className='uppercase text-2xl font-bold text-teal-400 font-orbitron cursor-pointer hover:text-teal-300 transition duration-300'>
            Haris-Shahnawaz
          </span>

          {/* Copyright */}
          <p className='text-sm text-zinc-500'>
            © 2026 Haris Shahnawaz. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className='flex space-x-3'>
            <a href='https://github.com/HarisShahnawaz' target='_blank' rel='noreferrer'
              className='p-2 rounded-full border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800 transition duration-300'>
              <FaGithub className='text-xl text-zinc-400 hover:text-white transition duration-300'/>
            </a>
            <a href='https://www.linkedin.com/in/haris-shahnawaz-670aa8291/' target='_blank' rel='noreferrer'
              className='p-2 rounded-full border border-zinc-700 hover:border-blue-500 hover:bg-zinc-800 transition duration-300'>
              <FaLinkedin className='text-xl text-zinc-400 hover:text-blue-400 transition duration-300'/>
            </a>
            <a href='https://www.instagram.com/shahnawaz.haris/' target='_blank' rel='noreferrer'
              className='p-2 rounded-full border border-zinc-700 hover:border-pink-500 hover:bg-zinc-800 transition duration-300'>
              <FaInstagram className='text-xl text-zinc-400 hover:text-pink-400 transition duration-300'/>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer