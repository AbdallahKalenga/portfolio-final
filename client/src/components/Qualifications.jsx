import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import { GiGraduateCap } from 'react-icons/gi'
import { AiFillCalendar } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { education, experience } from './util'

const Qualifications = () => {
  return (
    <div>
      <motion.h1
        className="text-2xl"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        So... <span className="text-alt"> What are my qualifications?</span>
      </motion.h1>

      <div className="flex flex-col items-start lg:flex-row mt-16 gap-12 ">
        <motion.div
          className="flex flex-col gap-8 justify-center lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div className="flex items-center gap-6">
            <GiGraduateCap className="text-2xl" />

            <p className="font-['Outfit'] text-lg">Timeline of my education</p>
          </motion.div>

          <motion.div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                className="flex items-center gap-6 font-['Outfit']"
                key={index}
              >
                <AiFillCalendar className="text-2xl" />

                <div>
                  <p> {edu?.name} </p>

                  <p className="text-sm text-alt"> {edu?.date} </p>

                  <p className="mt-2 w-full"> {edu?.desc} </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-12 justify-center lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div className="flex items-center gap-6">
            <BsFillBriefcaseFill className="text-lg" />

            <p className="font-['Outfit'] text-lg">Timeline of my experience</p>
          </motion.div>

          <motion.div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                className="flex items-center gap-6 font-['Outfit']"
                key={index}
              >
                <AiFillCalendar className="text-2xl" />

                <div>
                  <p> {exp.name} </p>

                  <p className="text-sm text-alt"> {exp.date} </p>

                  <p className="mt-2"> {exp.desc} </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Qualifications
