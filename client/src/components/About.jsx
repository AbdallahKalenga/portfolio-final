import selfie from '../assets/images/selfie.png'

import { motion } from 'framer-motion'

import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'

import { Link as ScrollLink } from 'react-scroll'

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center 2xl:flex-row">
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={selfie}
            className="w-[184px] drop-shadow rounded-full"
          />

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-12 flex flex-row font-[Outfit] items-center shadow-lg"
          >
            <div className="bg-secondary px-8 py-2 rounded-tl-md rounded-bl-md h-full">
              Got a project?
            </div>

            <ScrollLink
              className="border border-alt px-8 py-2 rounded-tr-md rounded-br-md cursor-pointer hover:bg-alt hover:text-black transition-all"
              to="contact"
              spy={true}
              smooth={true}
              offset={-125}
              duration={1000}
            >
              Contact me!
            </ScrollLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-secondary lg:w-[70%] 2xl:w-full justify-center rounded-lg shadow-lg mt-12 2xl:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center py-8 2xl:px-12">
            <h1 className="text-xl font-[Outfit]">
              Who is <span className="text-alt">Abdallah Kalenga?</span>
            </h1>

            <p className="text-sm font-[Outfit] mt-6 px-8">
              I'm a 21 year old, freshly graduated, web development enthusiast!
              <br /> <br />
              Whether it's full scale solutions or just portfolio sites, I try
              and give my 100% in every project I participate in!
            </p>

            <div className="flex justify-evenly gap-y-2 lg:gap-x-2 2xl:space-x-5 text-xs mt-10 flex-wrap items-center px-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary font-[Outfit] flex justify-center rounded-md cursor-default py-2 w-32"
              >
                Web Designer
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary font-[Outfit] flex justify-center rounded-md cursor-default py-2 w-32"
              >
                Web Developer
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary font-[Outfit] flex justify-center rounded-md cursor-default py-2 w-32"
              >
                UI Designer
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary font-[Outfit] flex justify-center rounded-md cursor-default py-2 w-32"
              >
                Student
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="font-[Outfit] mt-12 2xl:mt-56"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p> Keep up to date with me on my social media! </p>

        <motion.div className="flex justify-evenly bg-secondary w-full py-6 text-2xl  mt-4 rounded-md border border-white/[0.1] shadow-lg">
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="http://www.twitter.com/learning2dev"
            target="_blank"
            className="opacity-50 hover:opacity-100  cursor-pointer"
          >
            <AiOutlineTwitter />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="http://www.twitter.com/learning2dev"
            target="_blank"
            className="opacity-50 hover:opacity-100 cursor-pointer"
          >
            <AiFillFacebook />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="http://www.twitter.com/learning2dev"
            target="_blank"
            className="opacity-50 hover:opacity-100 cursor-pointer"
          >
            <AiFillInstagram />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="http://www.twitter.com/learning2dev"
            target="_blank"
            className="opacity-50 hover:opacity-100 cursor-pointer"
          >
            <AiFillLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            href="http://www.twitter.com/learning2dev"
            target="_blank"
            className="opacity-50 hover:opacity-100 cursor-pointer"
          >
            <AiFillGithub />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
