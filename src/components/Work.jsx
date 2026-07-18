import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { projectData } from '../assets/asstes'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
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

const Work = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projectData : projectData.slice(0, 6)

  return (
    <div id='work' className='py-20'>
      <div className='max-w-7xl mx-auto px-6 py-6'>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className='mb-16 text-center'
        > 
            <h2 className='text-4xl sm:text-5xl font-bold text-theme-text mb-6 font-orbitron'>
              Featured-
              <span className='text-theme-accent font-orbitron'>Projects</span>
            </h2>
            <p className='text-xl text-theme-text-sec max-w-3xl mx-auto'>Building modern web experiences from idea to deployment.</p>
        </motion.div>
        
        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          <AnimatePresence mode='popLayout'>
            {
              visibleProjects.map((project) => (
                  <motion.div 
                    key={project.title} 
                    variants={cardVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ scale: 1.025, y: -6 }}
                    className='group rounded overflow-hidden shadow-xs hover:shadow-md cursor-pointer border border-theme-border flex flex-col bg-theme-card transition-all duration-200 ease-out'
                  >
                      <div className='relative flex items-center justify-center overflow-hidden border-b border-theme-border/60 bg-theme-bg-sec'> 
                        <img className='w-full h-48 object-cover group-hover:scale-[1.04] transition-transform duration-300' src={project.image} alt={project.title} />
                      </div>
                      <div className='p-6 flex flex-col items-center text-center flex-grow'>
                        <h3 className='text-xl font-bold mb-2 font-orbitron text-theme-text'>{project.title}</h3>
                        <p className='text-theme-text-sec text-sm leading-relaxed flex-grow'>{project.description}</p>
                        
                        <div className='flex flex-wrap justify-center gap-2 mt-4 w-full'>
                          {project.tech.map((language, idx) => (
                            <span key={idx} className='px-3 py-1 bg-theme-accent/10 border border-theme-accent/15 text-theme-accent text-xs font-semibold rounded-full'>
                              {language}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href={project.link} 
                          target='_blank' 
                          rel='noreferrer'
                          className='flex items-center gap-2 mt-5 text-sm font-bold text-theme-accent hover:text-theme-accent-hover transition duration-300'
                        >
                          View Project <FaArrowRight className='text-xs'/>
                        </a>
                      </div>
                  </motion.div>
              ))
            }
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        {projectData.length > 6 && (
          <div className='flex justify-center mt-12'>
            <button
              onClick={() => setShowAll(prev => !prev)}
              className='px-10 py-4 bg-theme-btn text-theme-btn-text hover:bg-theme-btn-hover rounded-full font-semibold shadow-xs hover:scale-[1.03] hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2 border border-theme-border/20'
            >
              {showAll ? 'Show Less' : 'See More'}
              <FaArrowRight className={`text-sm transition-transform duration-300 ${showAll ? '-rotate-90' : 'rotate-0'}`} />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Work