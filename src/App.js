import './css/App.css';
import { React, useState, useEffect } from 'react'
import { useWindowDimensions } from './Functions'
import { LinkedIn, Instagram, Mail, Git } from './Icons'
import CursorMessage from './components/CursorMessage'
import BMW from './pages/BMW'
import Dash from './pages/Dash'
import DriveAlive from './pages/DriveAlive'
import GoFigure from './pages/GoFigure'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ScrollToTop from './components/ScrollToTop';

function App() {

  const { height, width } = useWindowDimensions()

  const [cursor, setCursor] = useState({x: 0, y: 0})

  const [message, setMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const setNewCursor = (newMessage, newVisible) => {
    setIsVisible(newVisible)
    setMessage(newMessage)

  }

  useEffect(() => {
    const logMousePosition = (event) => {
      setCursor({x: event.clientX, y: event.clientY + window.scrollY})
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
            <a href="http://instagram.com/hadleydalt" 
            onMouseEnter={() => setNewCursor("Instagram", true)}
            onMouseLeave={() => setNewCursor("hi", false)}
            style={{color: 'black'}}>
            <Instagram />
            </a>
            <a href="mailto:hadleydalt@gmail.com" 
            onMouseEnter={() => setNewCursor("Email Me", true)}
            onMouseLeave={() => setNewCursor("hi", false)}
            style={{color: 'black'}}>
            <Mail />
            </a>
            <a href="http://github.com/hadleydalt" 
            onMouseEnter={() => setNewCursor("GitHub", true)}
            onMouseLeave={() => setNewCursor("hi", false)}
            style={{color: 'black'}}>
            <Git />
            </a>
            <a href="http://linkedin.com/in/hadley-dalton"
            onMouseEnter={() => setNewCursor("LinkedIn", true)}
            onMouseLeave={() => setNewCursor("hi", false)}
            >
            <LinkedIn />
            </a>
          </div>
        </div>
        <Router basename="/my-portfolio">
        <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Home setNewCursor={setNewCursor}/>} />
            <Route path="/bmw" element={<BMW />} />
            <Route path="/dash" element={<Dash />} />
            <Route path="/drive-alive" element={<DriveAlive />} />
            <Route path="/go-figure" element={<GoFigure />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
    </>
  );
}

export default App;