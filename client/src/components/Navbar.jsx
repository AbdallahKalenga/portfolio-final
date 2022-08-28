import { Link as ScrollLink } from "react-scroll";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import { motion } from "framer-motion"
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        
        <div>
          <div className="flex flex-row items-center justify-center 2xl:justify-between">

            <motion.h1 
              className="uppercase text-lg lg:text-2xl font-[Outfit] font-bold tracking-widest w-full bg-primary w-full"
              initial={{x: -100, opacity: 0}}
              whileInView={{x: 0, opacity: 1}} 
              transition={{duration: 1}} 
            > 

              Abdallah <span className="text-alt"> Kalenga </span> 

            </motion.h1>

            <motion.div 
              className="hidden lg:flex flex-row justify-center items-center py-8 gap-4 2xl:justify-between bg-secondary w-full rounded-md 2xl:px-24 2xl:py-6 text-sm uppercase font-[Outfit] font-bold shadow-lg"
              initial={{x: 100, opacity: 0}}
              whileInView={{x: 0, opacity: 1}} 
              transition={{duration: 1}} 
            >

              <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="about" spy={true} smooth={true} offset={-1000} duration={1000}> About </ScrollLink> 

              <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="skills" spy={true} smooth={true} offset={-150} duration={1000}> Skills </ScrollLink> 

              <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="work" spy={true} smooth={true} offset={-150} duration={1000}> Work </ScrollLink> 

              <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="qualifications" spy={true} smooth={true} offset={-150} duration={1000}> Qualifications </ScrollLink> 

              <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="contact" spy={true} smooth={true} offset={-125} duration={1000}> Contact </ScrollLink> 

            </motion.div>

            <motion.div className="flex lg:hidden" onClick={() => setOpen(!open)}>

              {open ? <AiOutlineClose /> : <AiOutlineMenu />}

            </motion.div>

            </div>

            { open && (
                        <motion.div 
                        className="flex flex-col justify-center items-center py-8 gap-4 mt-8 2xl:mt-0 2xl:flex-row 2xl:justify-between bg-secondary w-full rounded-md 2xl:px-24 2xl:py-6 text-sm uppercase font-[Outfit] font-bold shadow-lg"
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}} 
                        transition={{duration: 1}} 
                      >

                        <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="about" spy={true} smooth={true} offset={-1000} duration={1000}> About </ScrollLink> 

                        <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="skills" spy={true} smooth={true} offset={-150} duration={1000}> Skills </ScrollLink> 

                        <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="work" spy={true} smooth={true} offset={-150} duration={1000}> Work </ScrollLink> 

                        <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="qualifications" spy={true} smooth={true} offset={-150} duration={1000}> Qualifications </ScrollLink> 

                        <ScrollLink className="hover:text-alt transition-all cursor-pointer" to="contact" spy={true} smooth={true} offset={-125} duration={1000}> Contact </ScrollLink> 

                      </motion.div>
            )}
        </div>

    )
}

export default Navbar;