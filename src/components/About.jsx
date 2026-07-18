import React from 'react'
import { assets } from '../assets/asstes'
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='py-20 bg-theme-bg-sec border-y border-theme-border/20'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='text-theme-accent font-orbitron'>About-</span>
            <span className='font-orbitron text-theme-text'>Me</span>
          </h2>
          <div className='w-16 h-1 bg-theme-accent mx-auto rounded-full'></div>
        </motion.div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          
          {/* Text Details & Timeline - Left Side */}
          <div className='lg:col-span-7 space-y-6'>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className='text-2xl sm:text-3xl font-bold text-theme-text leading-tight font-orbitron'
            >
              Hi, I'm <span className='text-theme-accent font-orbitron'>Haris Shahnawaz</span> — a MERN Stack Developer who loves building high-performance, user-first web applications.
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className='space-y-4 text-theme-text-sec text-base sm:text-lg leading-relaxed'
            >
              <p>
                I am a passionate software engineer based in Pakistan, specialized in designing robust backend APIs with <strong>Node.js & Express</strong> and engineering responsive, animated user interfaces with <strong>React & Tailwind CSS</strong>.
              </p>
              <p>
                My background in <strong>Information Technology</strong> has equipped me with a strong foundation in database architecture (MongoDB/Atlas), user authentication systems (JWT), real-time sockets (Socket.io), and cloud deployments.
              </p>
              <p className='text-theme-text font-semibold flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-theme-accent animate-pulse'></span>
                Currently focusing on: <span className='text-theme-accent'>Next.js, TypeScript, and Agentic AI integrations.</span>
              </p>
            </motion.div>

            {/* Education Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='space-y-4 pt-4'
            >
              <h4 className='text-xl font-bold text-theme-text font-orbitron uppercase border-b border-theme-border pb-2 tracking-wider'>
                Education
              </h4>
              <div className='relative border-l border-theme-border pl-6 ml-2 space-y-6'>
                {/* BS IT */}
                <div className='relative'>
                  <span className='absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-theme-accent border-4 border-theme-bg flex items-center justify-center'></span>
                  <h5 className='text-base font-bold text-theme-text flex items-center flex-wrap gap-2'>
                    BS Information Technology
                    <span className='text-[10px] font-bold px-2 py-0.5 bg-theme-accent/15 border border-theme-accent/20 text-theme-accent rounded-full'>
                      Result-Awaited
                    </span>
                  </h5>
                  <div className='text-sm font-semibold text-theme-text-sec mt-0.5'>
                    University of Okara | 2022 — 2026
                  </div>
                  <div className='text-xs text-theme-text-muted mt-1'>
                    CGPA: 3.62 / 4.00 • Focus: Software Development & Database Management
                  </div>
                </div>

                {/* Intermediate */}
                <div className='relative'>
                  <span className='absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-theme-border border-4 border-theme-bg flex items-center justify-center'></span>
                  <h5 className='text-base font-bold text-theme-text'>
                    Intermediate in Computer Sciences (HSSC)
                  </h5>
                  <div className='text-sm font-semibold text-theme-text-sec mt-0.5'>
                    Aligarh College, Lahore | 2020 — 2021
                  </div>
                </div>

                {/* Matriculation */}
                <div className='relative'>
                  <span className='absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-theme-border border-4 border-theme-bg flex items-center justify-center'></span>
                  <h5 className='text-base font-bold text-theme-text'>
                    Matriculation (SSC)
                  </h5>
                  <div className='text-sm font-semibold text-theme-text-sec mt-0.5'>
                    Govt Higher Secondary School, Lahore | 2018 — 2019
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action buttons and socials */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className='flex flex-wrap items-center gap-6 pt-6'
            >
              <div className='flex items-center gap-3 w-full sm:w-auto'>
                <a href='/resume.pdf' target='_blank' rel='noreferrer' className='flex-1 sm:flex-initial'>
                  <button className='px-6 py-3.5 border border-theme-border text-theme-text rounded-full cursor-pointer hover:bg-theme-bg-sec hover:scale-[1.03] transition-all duration-200 font-semibold shadow-xs flex items-center justify-center gap-2 min-h-[44px] w-full'>
                    View Resume
                    <FaArrowRight className='text-sm'/>
                  </button>
                </a>
                <a href='/resume.pdf' download='HarisShahnawaz-Resume.pdf' className='flex-1 sm:flex-initial'>
                  <button className='px-6 py-3.5 bg-theme-btn text-theme-btn-text rounded-full cursor-pointer hover:bg-theme-btn-hover hover:scale-[1.03] transition-all duration-200 font-semibold shadow-xs flex items-center justify-center gap-2 min-h-[44px] w-full'>
                    Download Resume
                    <FaDownload className='text-sm'/>
                  </button>
                </a>
              </div>

              <div className='hidden sm:block h-6 w-px bg-theme-border'></div>

              <div className='flex items-center gap-4'>
                <a 
                  href='https://github.com/HarisShahnawaz' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='p-3 border border-theme-border rounded-full hover:border-theme-border-focus hover:bg-theme-bg-sec text-theme-text-sec hover:text-theme-accent transition-all duration-200 flex items-center justify-center shadow-xs w-11 h-11'
                  aria-label="GitHub Profile"
                >
                  <FaGithub className='text-lg' />
                </a>
                <a 
                  href='https://www.linkedin.com/in/haris-shahnawaz-670aa8291/' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='p-3 border border-theme-border rounded-full hover:border-theme-border-focus hover:bg-theme-bg-sec text-theme-text-sec hover:text-theme-accent transition-all duration-200 flex items-center justify-center shadow-xs w-11 h-11'
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className='text-lg' />
                </a>
                <a 
                  href='https://www.instagram.com/shahnawaz.haris/' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='p-3 border border-theme-border rounded-full hover:border-theme-border-focus hover:bg-theme-bg-sec text-theme-text-sec hover:text-theme-accent transition-all duration-200 flex items-center justify-center shadow-xs w-11 h-11'
                  aria-label="Instagram Profile"
                >
                  <FaInstagram className='text-lg' />
                </a>
              </div>

            </motion.div>

          </div>

          {/* Code Snippet Card & Stats - Right Side */}
          <div className='lg:col-span-5 space-y-6'>
            {/* Code Snippet Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className='p-6 bg-zinc-950 border border-zinc-800 rounded-xl shadow-lg font-mono text-xs text-left leading-relaxed relative overflow-hidden group shadow-md'
            >
              <div className='flex items-center justify-between pb-4 border-b border-zinc-900 mb-4'>
                <div className='flex items-center gap-1.5'>
                  <span className='w-3 h-3 rounded-full bg-rose-500'></span>
                  <span className='w-3 h-3 rounded-full bg-amber-500'></span>
                  <span className='w-3 h-3 rounded-full bg-emerald-500'></span>
                </div>
                <span className='text-zinc-500 text-[10px]'>developer.json</span>
              </div>
              <pre className='text-teal-400 overflow-x-auto select-none'>
                <code>
{`{
  "name": "Haris Shahnawaz",
  "role": "MERN Stack Developer",
  "passion": "Building scalable web apps",
  "skills": ["React", "Node.js", "Express", "MongoDB"],
  "focus": ["Next.js", "TypeScript", "Agentic AI"],
  "academic": {
    "degree": "BS IT",
    "cgpa": "3.62 / 4.00"
  }
}`}
                </code>
              </pre>
            </motion.div>
            
            {/* Quick Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4'
            >
              <div className='p-5 bg-theme-card border border-theme-border rounded-xl shadow-xs hover:border-theme-border-focus hover:shadow-xs transition-all duration-200'>
                <div className='text-2xl font-bold text-theme-accent font-orbitron'>1+</div>
                <div className='text-sm text-theme-text-sec mt-1 font-semibold'>Years Experience</div>
              </div>
              <div className='p-5 bg-theme-card border border-theme-border rounded-xl shadow-xs hover:border-theme-border-focus hover:shadow-xs transition-all duration-200'>
                <div className='text-2xl font-bold text-theme-accent font-orbitron'>10+</div>
                <div className='text-sm text-theme-text-sec mt-1 font-semibold'>Projects Completed</div>
              </div>
              <div className='p-5 bg-theme-card border border-theme-border rounded-xl shadow-xs hover:border-theme-border-focus hover:shadow-xs transition-all duration-200'>
                <div className='text-2xl font-bold text-theme-accent font-orbitron'>15+</div>
                <div className='text-sm text-theme-text-sec mt-1 font-semibold'>Tech Stack Tools</div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
