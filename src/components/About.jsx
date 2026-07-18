import React from 'react'
import { profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

const About = () => {
  return (
    <div id='about' className='py-20 bg-theme-bg-sec'>
      <div className='max-w-4xl mx-auto px-6'>

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='text-theme-accent font-orbitron'>About-</span>
            <span className='font-orbitron text-theme-text'>Me</span>
          </h2>
          <div className='w-16 h-1 bg-theme-accent mx-auto rounded-full'></div>
        </motion.div>

        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='max-w-3xl mx-auto mb-12 space-y-5 text-center'
        >
          <p className='text-base leading-8 text-theme-text-sec'>
            I'm a <strong className='text-theme-text'>MERN Stack Developer</strong> based in Pakistan,
            passionate about building full-stack web applications from the ground up. On the frontend,
            I craft responsive, component-based UIs using{' '}
            <strong className='text-theme-text'>React</strong> and{' '}
            <strong className='text-theme-text'>Tailwind CSS</strong>. On the backend, I design and
            build scalable <strong className='text-theme-text'>REST APIs</strong> with{' '}
            <strong className='text-theme-text'>Node.js</strong> and{' '}
            <strong className='text-theme-text'>Express</strong>, backed by{' '}
            <strong className='text-theme-text'>MongoDB</strong> for data storage and{' '}
            <strong className='text-theme-text'>JWT</strong> for secure authentication.
          </p>
          <p className='text-base leading-8 text-theme-text-sec'>
            My latest project, <strong className='text-theme-accent'>HmaStore</strong>, is a fully
            featured e-commerce platform — handling everything from product listings and shopping
            cart to order management and an admin dashboard. Currently pursuing my{' '}
            <strong className='text-theme-text'>BS in Information Technology</strong> at Okara
            University and actively seeking internship opportunities at top Pakistani software houses.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'
        >
          {profileData.map((data, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className='p-6 bg-theme-card border border-theme-border rounded-xl text-center hover:border-theme-border-focus hover:shadow-xs transition-all duration-200'
            >
              <div className='w-12 h-12 bg-theme-accent/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaCode className='text-xl text-theme-accent' />
              </div>
              <h3 className='text-base font-bold text-theme-text mb-3'>{data.title}</h3>
              <div className='flex flex-col gap-1.5'>
                {data.technologies.map((tech, i) => (
                  <span key={i} className='text-sm text-theme-text-sec'>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='flex flex-col sm:flex-row justify-center gap-4'
        >
          <a href='/resume.pdf' target='_blank' rel='noreferrer' className='w-full sm:w-auto'>
            <button className='px-8 py-4 border border-theme-border text-theme-text rounded-full cursor-pointer hover:bg-theme-bg/55 hover:scale-[1.03] transition-all duration-200 w-full font-semibold shadow-xs'>
              View Resume
            </button>
          </a>
          <a href='/resume.pdf' download='HarisShahnawaz-Resume.pdf' className='w-full sm:w-auto'>
            <button className='px-8 py-4 bg-theme-btn text-theme-btn-text rounded-full cursor-pointer hover:bg-theme-btn-hover hover:scale-[1.03] transition-all duration-200 w-full font-semibold shadow-xs'>
              Download Resume
            </button>
          </a>
        </motion.div>

      </div>
    </div>
  )
}

export default About