import { useState } from 'react'
import Nav from './Comp/Nav'
import Hero from './Comp/Hero'

function App() {
  

  return (
    <>
      <main>
        <div style={{backgroundColor: 'black', color: 'white', minHeight: "100vh"}}>
          <Nav/>
          <Hero/>
        </div>
      </main>
    </>
  )
}

export default App
