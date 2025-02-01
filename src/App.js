import './css/App.css';
import { React, useState, useEffect } from 'react'
import { useWindowDimensions } from './Functions'
import { LinkedIn, Instagram, Mail, Git } from './Icons'
import SlidingResume from './SlidingResume'
import ResumeButton from './ResumeButton'
import CursorMessage from './CursorMessage'

function App() {

  const { height, width } = useWindowDimensions()

  const [isMoved, setIsMoved] = useState(false)

  const [cursor, setCursor] = useState({x: 0, y: 0})

  const [message, setMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const setNewCursor = (newMessage, newVisible) => {
    setIsVisible(newVisible)
    setMessage(newMessage)

  }

  useEffect(() => {
    const logMousePosition = (event) => {
      setCursor({x: event.clientX, y: event.clientY})
    };

    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <>
    <CursorMessage cursor={cursor} message={message} visible={isVisible} />
    <div className="App">
      <div className="splash">
        <div className="sidebar">
          <div className="icons-container">
            <img 
              className="icon-box" src={require("./graphics/HDLogo.png")} 
              onMouseEnter={() => setNewCursor("This logo is my initials mirrored but it also looks like a fly. 🪰 Flies in literature and mythology have symbolized persistence, survival, resilience, and inevitable decay. In design, they are a source of inspiration, a reminder that the creative process is always cyclical.", true)}
              onMouseLeave={() => setNewCursor("hi", false)}
            />
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
          <SlidingResume isMoved={isMoved} setNewCursor={setNewCursor} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;