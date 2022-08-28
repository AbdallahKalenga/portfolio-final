import { motion } from "framer-motion"
import Carousel from "./Carousel"
import slides from "./util/slides"
import { Link as ScrollLink } from "react-scroll"

const Works = () => {

    return (
        <div>
            
            <motion.h1 
                className="font-[Outfit] text-2xl"
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}} 
                transition={{duration: 1}} 
            > 

                So... <span className="text-alt"> What have I made? </span>

            </motion.h1>

            <div className="mt-32 h-full">

                <Carousel slides={slides} />
                
            </div>

            <motion.div
                className="lg:w-[42%]"
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}} 
                transition={{duration: 1}} 
            >
                <motion.div whileHover={{scale: 1.1}} className="lg:ml-12 mt-12 flex flex-col w-full lg:flex-row font-[Outfit] items-center shadow-lg">

                    <div className="bg-secondary px-8 py-[0.57rem] flex justify-center rounded-tl-md rounded-tr-md lg:rounded-tr-none lg:rounded-bl-md w-full">
                        Any way I can improve? 
                    </div>

                    <ScrollLink className="border border-alt px-8 py-2 flex justify-center rounded-bl-md lg:rounded-bl-none lg:rounded-tr-md rounded-br-md cursor-pointer w-full hover:bg-alt hover:text-black transition-all" to="contact" spy={true} smooth={true} offset={-125} duration={1000}>
                        Contact me!
                    </ScrollLink>

                </motion.div>
            </motion.div>


        </div>
    )
    
}

export default Works