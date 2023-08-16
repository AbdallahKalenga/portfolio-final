import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiStyledcomponents,
  SiFramer,
} from 'react-icons/si'

import { TbBrandNextjs } from 'react-icons/tb'

import { FaNodeJs, FaReact } from 'react-icons/fa'

import { motion } from 'framer-motion'

import Slider from './Slider'

const Skills = () => {
  const slides = [
    {
      id: 1,
      name: 'HTML5',
      icon: <SiHtml5 />,
    },
    {
      id: 2,
      name: 'CSS3',
      icon: <SiCss3 />,
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: <SiJavascript />,
    },
    {
      id: 4,
      name: 'NodeJS',
      icon: <FaNodeJs />,
    },
    {
      id: 5,
      name: 'Express',
      icon: <SiExpress />,
    },
    {
      id: 6,
      name: 'MongoDB',
      icon: <SiMongodb />,
    },
    {
      id: 7,
      name: 'React.js',
      icon: <FaReact />,
    },
    {
      id: 8,
      name: 'NextJS',
      icon: <TbBrandNextjs />,
    },
    {
      id: 9,
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
    },
    {
      id: 10,
      name: 'Styled Components',
      icon: <SiStyledcomponents />,
    },
    {
      id: 11,
      name: 'Framer Motion',
      icon: <SiFramer />,
    },
  ]

  return (
    <div>
      <motion.h1
        className="font-[Outfit] text-2xl"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        So... <span className="text-alt"> What are my skills? </span>
      </motion.h1>

      <div className="flex flex-col w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Slider slides={slides} />
        </motion.div>

        <motion.p
          className="mt-16 font-[Outfit]"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          These are all the skills that I’ve acquired from March, 2022; the
          month I decided to start my Web Development journey. Although I’ve
          acquired an understanding of these skills, I’m far from mastering each
          and every one of them, but try to improve 1% a day!
          <span className="block mt-3">
            I’ve come to realise that the world of Web Development is always
            evolving, changing, and therefore, I must keep up with this crazy
            world by actively pursuing knowledge , acquiring new skills and{' '}
            constantly practising!
          </span>
          <span className="block mt-3">
            This is something that I love about this new profession that I chose
            to delve into, as it’s always keeping me on my toes!
          </span>
          <span className="inline-block mt-3 bg-alt px-1 mr-1">
            - Abdallah Kalenga :)
          </span>
        </motion.p>
      </div>
    </div>
  )
}

export default Skills
