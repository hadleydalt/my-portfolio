import '../css/App.css';
import SlidingResume from '../components/SlidingResume'
import ResumeButton from '../components/ResumeButton'
import Projects from '../components/Projects'
import { useState } from 'react'

export default function Home({setNewCursor}) {

    const [isMoved, setIsMoved] = useState(false)

    return (
    <div className="main-column">
        <div className="main-wrapper">
        <div className="main">
          <div className="title-box">
          <img src={require("../graphics/TextTitle8.png")} className="main-title" />
          <ResumeButton toggleMove={() => setIsMoved(!isMoved)} label= {isMoved ? "← Hide Resume" : "Resume →"} />
          </div>
        </div>
        <div className="main-side">
          <SlidingResume isMoved={isMoved} setNewCursor={setNewCursor} />
        </div>
        </div>
        <Projects />
        </div>
    )
}