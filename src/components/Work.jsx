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
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
           {
            projectData.map((project, index) => (
                <div key={index} className='group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300'>
                    <div className='relative flex items-center justify-center'> 
                      <img className='w-full' src={project.image} alt={project.title} />
                    </div>
                    <div className='p-6'>
                      <h3 className='text-xl font-bold mb-2 font-orbitron'>{project.title}</h3>
                      <p className='text-slate-900 text-sm'>{project.description}</p>
                      <div className='flex flex-wrap gap-2 mt-4'>
                        {project.tech.map((language, index) => (
                          <span key={index} className='px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full'>
                            {language}
                          </span>
                        ))}
                      </div>
                      {/* View Project Button */}
                      <a 
                        href={project.link} 
                        target='_blank' 
                        rel='noreferrer'
                        className='flex items-center gap-2 mt-4 text-sm font-semibold text-teal-600 hover:text-teal-800 transition duration-300'
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