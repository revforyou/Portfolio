import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='pb-4'>
        
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='text-4xl font-bold text-center mb-12 text-purple-300'>Experience</motion.h1>
        <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>
                        <p className='mb-2 text-purple-300 text-lg'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4 lg:text-lg'>
                        <h6 className='mb-2 font-semibold'>{experience.role} -<span className='text-purple-300'> {experience.company}</span></h6>
                        <p className='mb-4 text-neutral-400'>{experience.description}</p>
                        {experience.technologies.map((technology,index)=>(
                            <span key={index} className=' mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300'>{technology}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Experience