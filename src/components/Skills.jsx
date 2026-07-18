import React from 'react'
import { techStackData } from '../assets/techStack'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

const Skills = () => {
  return (
    <div id='skills' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 font-orbitron text-theme-text'>
            <span className='text-theme-accent font-orbitron'>Tech-</span>Stack
          </h2>
          <p className='text-lg text-theme-text-sec max-w-2xl mx-auto font-medium'>
            A collection of tools, libraries, and frameworks that I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category sections */}
        <div className='space-y-12'>
          {techStackData.map((categoryGroup, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.05 }}
              className='space-y-5'
            >
              <h3 className='text-lg font-bold text-theme-text border-l-4 border-theme-accent pl-3 font-orbitron uppercase tracking-wider'>
                {categoryGroup.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'
              >
                {categoryGroup.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className='flex items-center gap-3 p-4 bg-theme-card border border-theme-border rounded-xl shadow-xs hover:border-theme-border-focus hover:shadow-xs transition-all duration-150 cursor-default'
                    >
                      <div className='text-2xl text-theme-accent flex-shrink-0'>
                        <Icon />
                      </div>
                      <span className='text-sm font-semibold text-theme-text truncate'>
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills
