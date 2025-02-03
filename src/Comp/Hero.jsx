import "./Hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <div className="home">
                <h1>Welcome to My Portfolio</h1>
                <h3>I am Susanta Paul, a Full-Stack Web Developer.</h3>
                <p>Explore my work and get in touch! </p>
            </div>
            <div className="hero-image">
                <img src="/public/Hero.png" alt="" />
            </div>
        </div>
    )
}