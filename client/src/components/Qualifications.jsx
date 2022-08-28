import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

import { GiGraduateCap } from "react-icons/gi"
import { AiFillCalendar } from "react-icons/ai"
import { BsFillBriefcaseFill } from "react-icons/bs"
import { education, experience } from "./util"


const Qualifications = () => {

    const titleControl = useAnimation()
    const educationControl = useAnimation()
    const experienceControl = useAnimation()
    
    const {ref, inView} = useInView()

    useEffect(() => {
        if (inView) {
            titleControl.start('visibleTitle')
        } 
        
        if (inView) {
            educationControl.start('visibleEducation')
        } 
        
        if (inView) {
            experienceControl.start('visibleExperience')
        }

    }, [titleControl, educationControl, experienceControl, inView])


    const qVariants = {
        hiddenTitle: {
            scale: 0
        }, 
        visibleTitle: {
            scale: 1,
            transition: {
                duration: 1
            }
        },

        hiddenEducation: {
            x: -1000
        },
        visibleEducation: {
            x: 0,
            transition: {
                duration: 1
            }
        },

        hiddenExperience: {
            x: 1000
        },
        visibleExperience: {
            x: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (

        <div>
            
            <motion.h1 
                className="text-2xl"
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1}}
            > 
            
                So... <span className="text-alt"> What are my qualifications?</span> 
            
            </motion.h1>

            <div className="flex flex-col lg:flex-row mt-16 gap-20">

                <motion.div 
                    className="flex flex-col gap-12 justify-center"
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                >

                    <motion.div className="flex items-center gap-6">

                        <GiGraduateCap className="text-2xl" />

                        <p className="font-['Outfit'] text-lg"> Timeline of my education </p>

                    </motion.div>

                    <motion.div>
                        {education.map((edu, index) => (

                            <motion.div className="flex items-center gap-6 font-['Outfit']" key={index}>

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
                    className="flex flex-col gap-12 justify-center"
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                >

                    <motion.div className="flex items-center gap-6">

                        <BsFillBriefcaseFill className="text-lg" />

                        <p className="font-['Outfit'] text-lg"> Timeline of my experience </p>

                    </motion.div>

                    <motion.div>
                        {experience.map((exp, index) => (

                            <motion.div className="flex items-center gap-6 font-['Outfit']" key={index}>

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