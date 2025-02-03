import "./Nav.css"


export default function Nav(){
    return(
        <div className="navbar">
            <div className="image">
                <img src="\public\Designer (10).png" />
            </div>
            <div className="links">
                <span>Home</span>
                <span>About Me</span>
                <span>Projects</span>
                <span>Skills</span>
                <span>Education</span>
                <span>Interests</span>
                <span>Resume</span>
            </div>
        </div>
    )
}