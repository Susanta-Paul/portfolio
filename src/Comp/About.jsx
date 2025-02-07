// import "./About.css"
import { motion } from "motion/react"


export default function About(){
    return (
        <div id="about" className="flex flex-col items-center pb-10 pt-10 lg:flex-row lg:justify-center lg:gap-5">
            <motion.div
                initial={{x: "-10%", opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.5,}}
             className="">
                <img
                    className="h-60 w-60 rounded-full lg:h-120 lg:w-120" src="/1693878262097.jpg" alt="" />
            </motion.div>
            <div className="w-[80vw] lg:w-[40vw] ">
                <motion.div
                    initial={{x: "10%", opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, }}
                    // viewport={{amount: 0.4}}
                 className="mt-[10vh] flex justify-center "><h1 className="text-3xl mb-3 lg:text-5xl">About Me</h1></motion.div>
                
                <motion.h3
                    initial={{x: "10%", opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.3}}
                    // viewport={{amount: 0.6}}
                 className="mt-3 text-lg text-center ">I'm Susanta Paul, a dedicated web developer. My passion lies in building robust, scalable web applications using technologies such as JavaScript, React, and Node.js.</motion.h3>
                <motion.p
                    initial={{x: "10%", opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                    // viewport={{amount: 0.6}}
                 className="text-center">
                    I hold a degree in computer science and have a proven track record of successfully leading and contributing to projects that deliver high-quality user experiences. My passion for coding drives me to continuously improve and stay updated with the latest industry trends.
                    I'm currently seeking new opportunities to apply my skills and contribute to innovative projects. Let's connect and explore how we can work together to create impactful solutions.
                </motion.p>
            </div>
        </div>
    )
} 
