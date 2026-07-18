import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-12 border-t border-theme-border bg-theme-bg-sec/90 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>

          {/* Logo */}
          <span className='uppercase text-2xl font-bold text-theme-accent font-orbitron cursor-pointer hover:text-theme-accent-hover transition duration-300'>
            Haris-Shahnawaz
          </span>

          {/* Copyright */}
          <p className='text-sm text-theme-text-muted'>
            © 2026 Haris Shahnawaz. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className='flex space-x-3'>
            <a href='https://github.com/HarisShahnawaz' target='_blank' rel='noreferrer'
              className='p-2 rounded-full border border-theme-border hover:border-theme-border-focus hover:bg-theme-bg transition duration-300'>
              <FaGithub className='text-xl text-theme-text-sec hover:text-theme-accent transition duration-300'/>
            </a>
            <a href='https://www.linkedin.com/in/haris-shahnawaz-670aa8291/' target='_blank' rel='noreferrer'
              className='p-2 rounded-full border border-theme-border hover:border-theme-border-focus hover:bg-theme-bg transition duration-300'>
              <FaLinkedin className='text-xl text-theme-text-sec hover:text-theme-accent transition duration-300'/>
            </a>
            <a href='https://www.instagram.com/shahnawaz.haris/' target='_blank' rel='noreferrer'
              className='p-2 rounded-full border border-theme-border hover:border-theme-border-focus hover:bg-theme-bg transition duration-300'>
              <FaInstagram className='text-xl text-theme-text-sec hover:text-theme-accent transition duration-300'/>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer