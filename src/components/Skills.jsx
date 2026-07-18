import React from 'react'
import { skillsData } from '../assets/asstes'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' }
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
            <span className='text-theme-accent font-orbitron'>Technical-</span>Skills
          </h2>
          <p className='text-lg text-theme-text-sec max-w-2xl mx-auto'>
            Mastering the tools that power modern web experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className='group p-6 bg-theme-card border border-theme-border rounded-xl text-center cursor-pointer transition-all duration-200 hover:border-theme-border-focus hover:shadow-xs'
            >
              {/* Icon circle */}
              <div className='w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-theme-accent/10 border border-theme-accent/15 mb-4 group-hover:bg-theme-accent/20 transition-colors duration-300'>
                <skill.icon className='w-7 h-7 text-theme-accent' />
              </div>

              {/* Title */}
              <h3 className='text-sm font-bold text-theme-text mb-3'>
                {skill.title}
              </h3>

              {/* Technologies */}
              <div className='flex flex-wrap justify-center gap-1.5'>
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='text-[10px] px-2 py-0.5 bg-theme-accent/10 text-theme-accent rounded-full border border-theme-accent/15'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Skills