import React from 'react'
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaLocationDot, FaRegClock } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'harisshahnawaz097@gmail.com',
    href: 'mailto:harisshahnawaz097@gmail.com'
  },
  {
    icon: FaLocationDot,
    label: 'Location',
    value: 'Pakistan',
    href: null
  },
  {
    icon: FaRegClock,
    label: 'Availability',
    value: 'Open to freelance & full-time roles',
    href: null
  }
]

const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/HarisShahnawaz',
    username: '@HarisShahnawaz'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haris-shahnawaz-670aa8291/',
    username: 'haris-shahnawaz'
  }
]

const Contact = () => {
  return (
    <div id='contact' className='py-20 bg-theme-bg-sec border-y border-theme-border/20'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className='mb-14'
        >
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 font-orbitron text-theme-text'>
            Get In- <span className='text-theme-accent font-orbitron'>Touch</span>
          </h2>
          <p className='text-theme-text-sec'>Have a project in mind or want to discuss potential opportunities?</p>
        </motion.div>

        {/* Two-column layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-start'>

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='flex flex-col'
          >
            <form className='flex flex-col gap-5 h-full' onSubmit={(e) => e.preventDefault()}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <input
                  className='px-4 py-3 w-full border border-theme-border rounded-lg outline-hidden bg-theme-card text-theme-text placeholder:text-theme-text-muted focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200'
                  placeholder='Your Name'
                  type="text"
                />
                <input
                  className='px-4 py-3 w-full border border-theme-border rounded-lg outline-hidden bg-theme-card text-theme-text placeholder:text-theme-text-muted focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200'
                  placeholder='Your Email'
                  type="email"
                />
              </div>
              <input
                className='px-4 py-3 w-full border border-theme-border rounded-lg outline-hidden bg-theme-card text-theme-text placeholder:text-theme-text-muted focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200'
                placeholder='Subject'
                type="text"
              />
              <textarea
                className='px-4 py-3 w-full h-48 border border-theme-border rounded-lg outline-hidden bg-theme-card text-theme-text placeholder:text-theme-text-muted focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200 resize-none'
                placeholder='Your Message'
              />
              <div>
                <button className='flex items-center gap-2 px-8 py-4 bg-theme-btn text-theme-btn-text cursor-pointer hover:bg-theme-btn-hover hover:scale-[1.03] transition-all duration-200 rounded-full font-semibold shadow-xs min-h-[44px]'>
                  Send Message
                  <FaArrowRight className='text-sm'/>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right — Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-6'
          >
            {/* Availability badge */}
            <div className='flex items-center gap-2 mb-2'>
              <span className='w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse'></span>
              <span className='text-sm font-semibold text-emerald-500'>Currently available for new projects</span>
            </div>

            {/* Contact info cards */}
            <div className='space-y-4'>
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const content = (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    className='flex items-start gap-4 p-5 bg-theme-card border border-theme-border rounded-xl hover:border-theme-border-focus transition-all duration-200 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-theme-accent/10 border border-theme-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-theme-accent/20 transition-colors duration-200'>
                      <Icon className='text-theme-accent text-base' />
                    </div>
                    <div>
                      <div className='text-xs font-bold text-theme-text-muted uppercase tracking-widest mb-0.5'>{item.label}</div>
                      <div className='text-sm font-semibold text-theme-text'>{item.value}</div>
                    </div>
                  </motion.div>
                )
                return item.href
                  ? <a key={i} href={item.href}>{content}</a>
                  : <div key={i}>{content}</div>
              })}
            </div>

            {/* Social links */}
            <div className='pt-2'>
              <div className='text-xs font-bold text-theme-text-muted uppercase tracking-widest mb-4'>Find me on</div>
              <div className='flex flex-col gap-3'>
                {socials.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <motion.a
                      key={i}
                      href={s.href}
                      target='_blank'
                      rel='noreferrer'
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.15 * i }}
                      className='flex items-center gap-4 p-4 bg-theme-card border border-theme-border rounded-xl hover:border-theme-border-focus hover:text-theme-accent transition-all duration-200 group'
                    >
                      <div className='w-9 h-9 rounded-lg bg-theme-accent/10 border border-theme-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-theme-accent/20 transition-colors duration-200'>
                        <Icon className='text-theme-accent text-base' />
                      </div>
                      <div>
                        <div className='text-xs font-bold text-theme-text-muted uppercase tracking-widest'>{s.label}</div>
                        <div className='text-sm font-semibold text-theme-text group-hover:text-theme-accent transition-colors duration-200'>{s.username}</div>
                      </div>
                      <FaArrowRight className='ml-auto text-xs text-theme-text-muted group-hover:text-theme-accent transition-colors duration-200 -rotate-45' />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Contact