// import "./Hero.css"
// import { easeIn, easeOut } from "motion"
import { motion } from "motion/react"

export default function Hero(){

    const variable =(delay)=>({
        hidden: {x:"-40%", opacity: 0},
        show: {
            x:0,
            opacity: 1,
            transition: {duration: 1, delay: delay}
        }
    }) 

    return(
        <>
            <div id="home" className="h-[20vh]"></div>
            <div className="flex flex-col justify-center items-center lg:flex-row ">
                <div
                    className="block w-[80vw] text-center lg:w-[40vw] lg:mx-[10%] ">
                    <motion.h1 
                        variants={variable(0.5)}
                        initial="hidden"
                        animate="show"
                    className="mb-3 text-5xl lg:text-7xl">
                        Welcome to My Portfolio</motion.h1>
                    <motion.h2 
                        variants={variable(1)}
                        initial="hidden"
                        animate="show"
                        className="mb-3 text-2xl lg:text-3xl">
                        I am Susanta Paul, a Full-Stack Web Developer.</motion.h2>
                    <motion.p 
                        variants={variable(1.2)}
                        initial="hidden"
                        animate="show">
                        Explore my work and get in touch! </motion.p>
                </div>
                <div className="h-60 w-60 lg:h-120 lg:w-120">
                    <motion.img
                        initial={{x: "40%", opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        className="w-[100%] mt-3 " src="/Hero.png" alt="" />
                </div>
            </div>
            <div className="h-[10vh]"></div>
        </>
    )
}
