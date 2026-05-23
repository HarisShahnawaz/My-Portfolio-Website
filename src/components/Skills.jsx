import React from 'react'
import { skillsData } from '../assets/asstes'

const Skills = () => {
  return (
    <div id='skills' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 font-orbitron'>
            <span className='text-teal-600'>Technical-</span>Skills
          </h2>
          <p className='text-lg text-zinc-500 max-w-2xl mx-auto'>
            Mastering the tools that power modern web experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='group p-6 bg-white border border-zinc-200 rounded-xl text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-sm'
            >
              {/* Icon circle */}
              <div className='w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-teal-50 border border-teal-100 mb-4 group-hover:bg-teal-100 transition-colors duration-300'>
                <skill.icon className='w-7 h-7 text-teal-700' />
              </div>

              {/* Title */}
              <h3 className='text-sm font-bold text-zinc-700 mb-2'>
                {skill.title}
              </h3>

              {/* Technologies */}
              <div className='flex flex-wrap justify-center gap-1'>
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='text-xs px-2 py-0.5 bg-teal-50 text-teal-700 rounded-full border border-teal-100'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills