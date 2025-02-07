import {FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoDjango } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react"




export default function Technologies(){

    const iconVariants=(duration)=>({
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {duration: duration,ease: "linear", repeat: Infinity, repeatType: "reverse"}
        }
    })


    return(
        <div id="tech" className="flex flex-col items-center py-10 ">
            <motion.div
                whileInView={{y: 0, opacity: 1}}
                initial={{y: -40, opacity: 0}}
                transition={{duration: 1.5, }}
            ><h1 className="text-3xl mb-5 ">Technologies</h1></motion.div>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{x: "-30%", opacity: 0}}
                transition={{duration: 1.5,}}
                viewport={{amount: 0.6}}
            className="w-[80vw] flex gap-7 flex-wrap mt-5 justify-center ">
                <motion.div 
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                className="h-20 w-20 rounded-2xl border-4 border-neutral-800 p-5">
                    <FaReact className="text-4xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                 className="h-20 w-20 rounded-2xl border-4 border-neutral-800 p-5">
                    <BiLogoMongodb className="text-4xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                 className="h-20 w-20 rounded-2xl border-4 border-neutral-800 p-5">
                    <IoLogoNodejs className="text-4xl text-[#6cc24a]" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                className="h-20 w-20 rounded-2xl border-4 border-neutral-800 p-5">
                    <BiLogoDjango className="text-4xl text-green-900" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(0.5)}
                    initial="initial"
                    animate="animate"
                className="h-20 w-20 rounded-2xl border-4 border-neutral-800 p-5">
                    <SiSqlite className="text-4xl text-[#90D4F4]" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1)}
                    initial="initial"
                    animate="animate"
                className="h-20 w-20 rounded-2xl border-4 border-neutral-800 p-5">
                    <FaHtml5 className="text-4xl text-[#f06529]" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                className="h-20 w-20 rounded-2xl border-4 border-neutral-800 p-5">
                    <RiTailwindCssFill className="text-4xl text-sky-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}