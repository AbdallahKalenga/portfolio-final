import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider = ({slides}) => {

    const [width, setWidth] = useState(0)

    const carousel = useRef();

    useEffect(() => {

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        
    }, [])

    return (

        <div className="mt-16 w-full">


            <h1 className="font-[Outfit] text-sm"> Drag through the carousel to see all my skills! </h1>
            
            <motion.div ref={carousel} className="w-full overflow-hidden cursor-grab mt-4">

            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="flex gap-6 2xl:gap-6">
            
                {slides.map((slide) => (

                    <motion.div className="flex flex-col items-center opacity-50 hover:opacity-100" key={slide.id} whileHover={{scale: 0.95}} transition={{duration: 0.3}}>

                        <motion.div className="bg-secondary w-32 h-20 2xl:w-48 flex items-center justify-center py-12 text-3xl rounded-md border border-white/[0.1]">
                            {slide.icon}
                        </motion.div >

                        <h1 className="font-[Outfit] mt-3 text-sm"> {slide.name} </h1>

                    </motion.div >

                ))}

                </motion.div>

            </motion.div>

        </div>

    )
}

export default Slider;