import { useRef, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import {Link} from "react-scroll"


export default function Nav(){

    const [isNone, setIsnone]=useState(true)
    const ele= useRef()

function changeDisplay(){
    if(isNone){
        // make flex
        ele.current.style.display="inline"
    }else{
        // make none
        ele.current.style.display="none"
    }
    setIsnone(!isNone) 
}


    return(
        <div style={{padding: "10px"}} className="border-1 border-white-900 translate-x-[-50%] flex justify-between items-center w-auto rounded-md fixed top-[5%] left-[50%] bg-black z-50 lg:w-[80vw] " >
            <div className="h-[50px] w-[100px] overflow-hidden rounded-md ">
                <img className="w-[100%]" src="/Designer (10).png" />
            </div>
            <div className="hidden bg-gray-200 text-black rounded-md absolute top-[100%] right-0 lg:flex lg:static lg:flex-row lg:justify-evenly lg:w-[80%] lg:bg-black " ref={ele}>
                <Link to="home" offset={-140} ><div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">Home</div></Link>
                <Link to="about" offset={-140} ><div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">About Me</div></Link>
                <Link to="projects" offset={-140} ><div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">Projects</div></Link>
                <Link to="tech" offset={-140} ><div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">Skills</div></Link>
                <Link to="contact" offset={-140} ><div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">Contact</div></Link>
                {/* <div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">Education</div>
                <div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">Interests</div>
                <div className="cursor-pointer text-lg lg:text-teal-300 hover:text-xl">Resume</div> */}
            </div>
            <div className="lg:hidden" onClick={changeDisplay}><IoReorderThreeOutline style={{height: 40, width: 40, cursor: "pointer"}}/></div>
        </div>
    )
} 