import React from 'react'
import { profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa6'

const About = () => {
  return (
    <div id='about' className='py-20 bg-zinc-50/50'>
      <div className='max-w-4xl mx-auto px-6'>

        {/* Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='text-teal-800 font-orbitron'>About-</span>
            <span className='font-orbitron'>Me</span>
          </h2>
          <div className='w-16 h-1 bg-teal-600 mx-auto rounded-full'></div>
        </div>

        {/* Text */}
        <div className='max-w-3xl mx-auto mb-12 space-y-5 text-center'>
          <p className='text-base leading-8 text-zinc-600'>
            I'm a <strong className='text-zinc-800'>MERN Stack Developer</strong> based in Pakistan,
            passionate about building full-stack web applications from the ground up. On the frontend,
            I craft responsive, component-based UIs using{' '}
            <strong className='text-zinc-800'>React</strong> and{' '}
            <strong className='text-zinc-800'>Tailwind CSS</strong>. On the backend, I design and
            build scalable <strong className='text-zinc-800'>REST APIs</strong> with{' '}
            <strong className='text-zinc-800'>Node.js</strong> and{' '}
            <strong className='text-zinc-800'>Express</strong>, backed by{' '}
            <strong className='text-zinc-800'>MongoDB</strong> for data storage and{' '}
            <strong className='text-zinc-800'>JWT</strong> for secure authentication.
          </p>
          <p className='text-base leading-8 text-zinc-600'>
            My latest project, <strong className='text-teal-700'>HmaStore</strong>, is a fully
            featured e-commerce platform — handling everything from product listings and shopping
            cart to order management and an admin dashboard. Currently pursuing my{' '}
            <strong className='text-zinc-800'>BS in Information Technology</strong> at Okara
            University and actively seeking internship opportunities at top Pakistani software houses.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
          {profileData.map((data, index) => (
            <div
              key={index}
              className='p-6 bg-white border border-zinc-200 rounded-xl text-center hover:border-teal-500 hover:shadow-md transition duration-300 hover:-translate-y-1'
            >
              <div className='w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaCode className='text-xl text-teal-700' />
              </div>
              <h3 className='text-base font-bold text-zinc-800 mb-3'>{data.title}</h3>
              <div className='flex flex-col gap-1.5'>
                {data.technologies.map((tech, i) => (
                  <span key={i} className='text-sm text-zinc-500'>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <a href='/resume.pdf' target='_blank' rel='noreferrer'>
            <button className='px-8 py-4 border border-zinc-700 text-zinc-700 rounded-full cursor-pointer transition duration-300 hover:bg-zinc-100 w-full sm:w-auto'>
              View Resume
            </button>
          </a>
          <a href='/resume.pdf' download='HarisShahnawaz-Resume.pdf'>
            <button className='px-8 py-4 bg-zinc-800 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-950 w-full sm:w-auto'>
              Download Resume
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default About