import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id='contact' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl lg:text-5xl font-bold mb-6 font-orbitron text-theme-text'>
          Get In- <span className='text-theme-accent font-orbitron'>Touch</span>
        </h2>
        <p className='text-theme-text-sec mb-2'>Have A Project In Mind Or Want To Discuss Potential Opportunities.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='max-w-3xl mx-auto'
      >
        <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                 <input className='px-4 py-3 w-full border border-theme-border rounded outline-hidden bg-theme-card text-theme-text focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200'
                 placeholder='Enter Name'
                 type="text" />
              </div> 
               <div>
                 <input className='px-4 py-3 w-full border border-theme-border rounded outline-hidden bg-theme-card text-theme-text focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200'
                 placeholder='Enter Email'
                 type="email" />
              </div> 
             </div>
             <div>
                 <input
                 className='px-4 py-3 w-full border border-theme-border outline-hidden rounded bg-theme-card text-theme-text focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200'
                 placeholder='Enter Subject'
                 type="text" />
             </div>
              <div>
                 <textarea
                 className='px-4 py-3 w-full h-40 border border-theme-border outline-hidden rounded bg-theme-card text-theme-text focus:border-theme-border-focus focus:ring-1 focus:ring-theme-border-focus transition-all duration-200'
                 placeholder='Enter Message'
                 type="textarea" />
              </div>
              <div className='flex items-center justify-center'>
                <button className='flex items-center gap-2 px-8 py-4 bg-theme-btn text-theme-btn-text text-center cursor-pointer hover:bg-theme-btn-hover hover:scale-[1.03] transition-all duration-200 rounded-full font-semibold shadow-xs'>
                  Send Message
                  <FaArrowRight className='text-sm'/>
                </button>
              </div>
         </form>
      </motion.div>
      </div>
    </div>
  )
}

export default Contact