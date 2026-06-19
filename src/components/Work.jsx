import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { projectData } from '../assets/asstes'

const Work = () => {
  return (
    <div id='work' className='py-20'>
      <div className='max-w-7xl mx-auto px-6 py-6'>
        <div className='mb-16 text-center'> 
           <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6 font-orbitron'>
            Featured-
            <span className='text-teal-600 font-orbitron'>Projects</span>
           </h2>
           <p className='text-xl max-w-3xl mx-auto'>Building modern web experiences from idea to deployment.</p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {
            projectData.map((project, index) => (
                <div key={index} className='group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300 flex flex-col bg-white'>
                    <div className='relative flex items-center justify-center overflow-hidden border-b border-gray-100'> 
                      <img className='w-full h-48 object-cover group-hover:scale-105 duration-300' src={project.image} alt={project.title} />
                    </div>
                    {/* Added text-center, flex, and items-center to make everything perfectly middle-aligned */}
                    <div className='p-6 flex flex-col items-center text-center flex-grow'>
                      <h3 className='text-xl font-bold mb-2 font-orbitron text-slate-800'>{project.title}</h3>
                      <p className='text-slate-600 text-sm leading-relaxed flex-grow'>{project.description}</p>
                      
                      {/* Added justify-center so the badges sit dead-center */}
                      <div className='flex flex-wrap justify-center gap-2 mt-4 w-full'>
                        {project.tech.map((language, index) => (
                          <span key={index} className='px-3 py-1 bg-gray-100 border border-gray-200 text-slate-600 text-xs font-semibold rounded-full'>
                            {language}
                          </span>
                        ))}
                      </div>
                      
                      {/* View Project Button */}
                      <a 
                        href={project.link} 
                        target='_blank' 
                        rel='noreferrer'
                        className='flex items-center gap-2 mt-5 text-sm font-semibold text-teal-600 hover:text-teal-800 transition duration-300'
                      >
                        View Project <FaArrowRight className='text-xs'/>
                      </a>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Work