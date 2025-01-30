import './css/App.css';
import React from 'react'
import { useWindowDimensions } from './Functions'
import MovingText from './MovingText'
import Date from './Date'

function App() {

  const { height, width } = useWindowDimensions()
  const [scrollPos, setScrollPos] = React.useState(0)

  const handleScroll = () => {
    const pos = window.scrollY
    setScrollPos(pos)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: 'true' })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // const opacity = 1.0 - (scrollPos / height)

  // window.scrollTo({top: point, behavior: "smooth"})

  return (
    <div className="App">
      <img className="collage-1" src={require("./graphics/previews/butterflies3.png")} />
      <img className="collage-2" src={require("./graphics/previews/fish2.png")} />
      <img className="splotch-1" src={require("./graphics/previews/splotch1.png")} />
      <img className="splotch-2" src={require("./graphics/previews/splotch2.png")} />
      <img className="background-noise" src={require("./graphics/previews/Noise1.png")} />
      <div className="grid-top">
        <div className="welcome-box">
          <MovingText />
        </div>
        <div className="grid-top-panel">
          <Date />
          <div className="digital-heading">
            page one
          </div>
        </div>
      </div>
      <div className="grid-middle">
        <div className="grid-middle-panel">
          <div className="grid-middle-panel" style={{height: "60vh", flexDirection: "row"}}>
            <div className="grid-middle-panel" style={{height: "60vh", width: "24vw"}}>
            </div>
            <div className="grid-middle-panel" style={{height: "60vh", width: "50vw", border: 0, display: "flex", flexDirection: "columnn", alignItems: "center", justifyContent: "center"}}>
              <div className="titular">
                <div className="titular-uno" style={{fontSize: "1.1vw", fontStyle: "normal", letterSpacing: "0.5vw", fontFamily: "DotGothic16"}}>
                  Volume IV. Issue III
                </div>
                <div className="titular-dos" style={{fontWeight: 600}}>
                ⎯ Hadley Dalton
                </div>
                <div className="titular-uno">
                  Product Designer
                </div>
                <div className="titular-dos">
                  Illustrator
                </div>
                <div className="titular-uno">
                  Mobile Developer
                </div>
                <div className="titular-dos">
                  Software Engineer
                </div>
              </div>
            </div>
          </div>
          <div className="grid-middle-panel" style={{height: "20vh", borderTop: "1px solid black", display: "flex"}}>
          <div className="box-heading" style={{alignSelf: "flex-end", padding: "2vw"}}>
            ⎯ About
          </div>
          </div>
        </div>
        <div className="grid-middle-panel" style={{width: "25vw", display: "flex"}}>
          <div className="box-heading" style={{alignSelf: "flex-end", padding: "2vw"}}>⎯ Shortcuts</div>
        </div>
        
      </div>
    </div>
  );
}

export default App;