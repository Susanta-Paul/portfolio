import { useState } from "react"
import { motion } from "motion/react"


export default function Projects(){


    const [allProjects, setProjects]=useState([
        {
            image: "/youtube.jpg",
            title: "MyTube- My Adaptaion of YouTube",
            about: "'My Tube' is a video-watching platform developed using React and the YouTube API. It mirrors the core functionalities of YouTube, offering an intuitive and user-friendly interface for video search, playback, and user interactions. By integrating React's efficient library and the powerful capabilities of the YouTube API, It provides a seamless viewing experience, showcasing the developer's proficiency in modern web development technologies.",
            tech: ["HTML", "CSS", "REACT", "Youtube-Api", ],
            link: "https://my-tube-susanta.netlify.app/",
            github: "https://github.com/Susanta-Paul/Youtube",
        },
        {
            image: "/Screenshot 2025-02-07 214834.png",
            title: "Instagram Clone",
            about: "'My InstaClone' is a social media platform built using the MERN stack (MongoDB, Express.js, React, and Node.js) and Cloudinary for file storage. It emulates the core functionalities of Instagram, including photo and video sharing, user profiles, and interactive features such as likes and comments. By leveraging the MERN stack's powerful capabilities and Cloudinary's efficient file storage solutions, It offers a smooth and engaging user experience, showcasing the developer's proficiency in full-stack development and modern web technologies.",
            tech: ["HTML", "CSS", "REACT", "Multer", "Express", "Node.js", "mongodb", "Cloudinary"],
            Link: "",
            github: "https://github.com/Susanta-Paul/Instagram",
        },
        {
            image: "/Designer (5).png",
            title: "Archy-a one stop solution for all of your house issues",
            about: "Archy is a one stop platform for each and every problem you face either during building a house or during decoration it. Weather it is related to finding the best architect or finding the cheapest material available out there. Archy has the solution for everything. Archy is a multipurpose website where the people can connect with a wide range of engineers, architects, constructor, vendor, etc. So, they could choose what fit them the best from the design of the house to the completion of it.",
            tech: ["HTML", "CSS", "JavaScript","Python", "Django", "SQLite3"],
            Link: "",
            github: "https://github.com/Susanta-Paul/Archy",
        },
    ])


    return (
        <div id="projects" className="pb-10 flex flex-col items-center justify-center">
            <motion.div 
                initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 1,}}
            className="flex justify-center mb-10"><h1 className="text-3xl">Projects</h1></motion.div>
            <div style={{perspective: "1000px"}} className=" w-screen flex justify-center flex-wrap gap-7">
                {allProjects.map((project, index)=>(
                    <motion.div key={index}
                        style={{originY: "100%", transformStyle: 'preserve-3d'}} 
                        initial={{ opacity: 0, rotateX: 90 }}
                        whileInView={{ opacity: 1, x: 0, rotateX: 0}}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{margin: '90% 0px'}}
                    className="w-[80vw] p-2 rounded-lg border-2 border-white lg:w-[35vw] " >
                        
                        <div className="overflow-hidden h-[30%]" ><img className="w-[100%]" src={project.image} alt="" /></div>
                        <div>
                            <h1 className="mt-5 text-3xl underline"> {project.title} </h1>
                            <p className="mt-3 text-xl text-center"> {project.about} </p>
                        </div>
                        <div className="flex justify-center gap-4 flex-wrap mt-5">
                            {project.tech.map((skill, idx)=>(
                                <div key={idx} className="cursor-pointer bg-[#111] text-violet-500 p-2 rounded-md border-1 border-white "> 
                                    {skill} 
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-xl ">
                            <h3 className="inline">Live Link: </h3>
                            <a className="underline" href={project.link} target="_main">{project.link}</a></div>
                        <div className="mt-5 text-xl ">
                            <h3 className="inline">Github Link: </h3>
                            <a className="underline" href={project.github} target="_main">{project.github}</a></div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}