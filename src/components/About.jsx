import React from 'react'
import { profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa6'
import { assets } from '../assets/asstes'

const About = () => {
  return (
    <div id='about' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          
          {/* text section */}
          <div className='order-1'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-teal-800 font-orbitron'>About-</span>
              <span className='font-orbitron'>Me</span>
            </h2>
           <p className='text-md mb-4 leading-8 text-zinc-700'>
  I'm a MERN Stack Developer based in Pakistan, passionate about building
  full-stack web applications from the ground up. On the frontend, I craft
  responsive, component-based UIs using <strong>React</strong> and <strong>Tailwind CSS</strong>.
  On the backend, I design and build scalable <strong>REST APIs</strong> with
  <strong> Node.js</strong> and <strong>Express</strong>, backed by <strong>MongoDB</strong>
  for data storage and <strong>JWT</strong> for secure authentication.
</p>
<p className='text-md mb-8 leading-8 text-zinc-700'>
  My latest project, <strong>HmaStore</strong>, is a fully featured e-commerce
  platform that brings all of these skills together — handling everything from
  product listings and shopping cart to order management and an admin dashboard.
  I'm currently pursuing my BS in Information Technology at Okara University
  and actively seeking internship opportunities at top Pakistani software houses.
</p>
            {/* cards */}
            <div className='flex flex-col sm:flex-row items-stretch justify-between gap-6 mb-8'>
              {profileData.map((data, index) => (
                <div
                  key={index}
                  className='w-full sm:w-1/3 p-6 border border-zinc-400 rounded hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-r-4 hover:border-b-zinc-800 hover:border-r-zinc-800 transition duration-300 hover:-translate-y-1 overflow-hidden'
                >
                  <FaCode className='text-3xl mb-4 text-teal-700'/>
                  <h1 className='text-xl font-bold mb-4'>
                    {data.title}
                  </h1>
                  <div className='flex flex-col gap-1'>
                    {data.technologies.map((tech, i) => (
                      <span key={i} className='text-sm text-zinc-600'>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <a href='/resume.pdf' target='_blank' rel='noreferrer'>
                <button className='px-8 py-4 border border-zinc-700 text-zinc-700 rounded-full cursor-pointer transition duration-300 hover:bg-zinc-100'>
                  View Resume
                </button>
              </a>
              <a href='/resume.pdf' download='HarisShahnawaz-Resume.pdf'>
                <button className='px-8 py-4 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-900'>
                  Download Resume
                </button>
              </a>
            </div>

          </div>

          {/* image section */}
          <div className='order-2 hidden md:flex justify-center items-start pt-2'>
            <div className='w-full h-full max-w-sm rounded-2xl overflow-hidden border-4 border-slate-600/30'>
              <img 
                className='w-full h-full object-cover object-top' 
                src={assets.profileImg} 
                alt='Haris Shahnawaz' 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About