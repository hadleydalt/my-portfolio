import './css/App.css';
import { React, useState, useEffect } from 'react'
import { useWindowDimensions } from './Functions'
import { LinkedIn, Instagram, Mail, Git } from './Icons'
import SlidingResume from './SlidingResume'
import ResumeButton from './ResumeButton'

function App() {

  const { height, width } = useWindowDimensions()
  const [scrollPos, setScrollPos] = useState(0)

  const [isMoved, setIsMoved] = useState(false)

  const handleScroll = () => {
    const pos = window.scrollY
    setScrollPos(pos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: 'true' })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // const opacity = 1.0 - (scrollPos / height)

  // window.scrollTo({top: point, behavior: "smooth"})

  return (
    <div className="App">
      <div className="splash">
        <div className="sidebar">
          <div className="icons-container">
            <img className="icon-box" src={require("./graphics/HDLogo.png")} />
            <Instagram />
            <Mail />
            <Git />
            <LinkedIn />
          </div> 
        </div>
        <div className="main">
          <div className="title-box">
          <img src={require("./graphics/TextTitle7.png")} className="main-title" />
          <ResumeButton toggleMove={() => setIsMoved(!isMoved)} label= {isMoved ? "← Hide Resume" : "Resume →"} />
          </div>
        </div>
        <div className="main-side">
          <SlidingResume isMoved={isMoved} />
        </div>
      </div>
    </div>
  );
}

export default App;