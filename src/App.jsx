import { useState } from 'react'
import "./App.css"
import Nav from './Comp/Nav'
import Hero from './Comp/Hero'
import About from './Comp/About'
import Technologies from './Comp/Technologies'
import Projects from './Comp/Projects'
import Contact from './Comp/Contact'

function App() {
  

  return (
    <>
      <main>
        <div style={{backgroundColor: 'black', color: 'white', minHeight: "100vh"}}>
          <Nav/>
          <Hero/>
          <hr />
          <About/>
          <hr />
          <Technologies/>
          <Projects/>
          <hr />
          <Contact/>
          <hr />
          <footer className='h-[15vh] bg-black text-white pt-10 flex justify-center items-center'>
            <h1 className='text-3xl lg:text-5xl'>FOOTER</h1>
          </footer>
        </div>
      </main>
    </>
  )
}

export default App
