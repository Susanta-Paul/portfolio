import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react"


export default function Contact(){

    const animate=(dist, delay)=>({
        in: {x:dist, opacity: 0},
        ani: {
            x:0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: delay
            }
        }
    })


    return (
        <div id="contact" className="flex items-center flex-col mb-10">
            <motion.div 
                initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 1,}}
            className="flex justify-center mt-7 "><h1 className="text-3xl ">Contact</h1></motion.div>
            <div className="flex justify-center gap-2 items-center mt-3">
                <motion.div 
                    variants={animate("-10%", 0.5)}
                    initial="in"
                    whileInView="ani"
                className="border-4 border-neutral-800 rounded-full p-4 w-16 ">
                <SiGmail className="text-2xl"/></motion.div>
                <motion.h3 
                    variants={animate("10%", 0.5)}
                    initial="in"
                    whileInView="ani"
                className="text-xl ">susantapaul5920@gmail.com</motion.h3>
            </div>
            <div className="flex gap-7 flex-wrap w-[80vw] justify-center mt-5  ">
                <a href="http://www.linkedin.com/in/susanta-paul-3ab93528a" target="_main"><motion.div 
                    variants={animate("-10%", 1)}
                    initial="in"
                    whileInView="ani"
                className="cursor-pointer border-4 border-neutral-800 rounded-full p-4 w-18 ">
                    <FaLinkedin className="text-3xl text-[#0077B5] bg-white " />
                </motion.div></a>
                <a href="https://github.com/Susanta-Paul" target="_main"><motion.div 
                    variants={animate("-10%",0.5)}
                    initial="in"
                    whileInView="ani"
                className="cursor-pointer border-4 border-neutral-800 rounded-full p-4 w-18 ">
                    <FaGithub className="text-3xl " />
                </motion.div></a>
                <motion.div 
                    variants={animate("10%", 0.5)}
                    initial="in"
                    whileInView="ani"
                className="cursor-pointer border-4 border-neutral-800 rounded-full p-4 w-18 ">
                    <FaSquareXTwitter className="text-3xl text-black bg-white " />
                </motion.div>
                <motion.div 
                    variants={animate("10%", 1)}
                    initial="in"
                    whileInView="ani"
                className="cursor-pointer border-4 border-neutral-800 rounded-full p-4 w-18 ">
                    <FaInstagram className="text-3xl text-pink-500 bg-white " />
                </motion.div>
            </div>
        </div>
    )
}