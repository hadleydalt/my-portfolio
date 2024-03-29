import './css/App.css';
import React from 'react'
import { useWindowDimensions } from './Functions'
import { SplashPage } from './splash-page/SplashPage'
import { Project } from './pages/projects/Project'
import { Preview } from './pages/previews/Preview'
import { AboutBox } from './pages/AboutBox'
import { Dates, Titles, ClassInfo, Skills, Tools, Info, Format } from './pages/previews/WorkInfo'
import { Dates as PaintDates, Titles as PaintTitles, ClassInfo as PaintClassInfo, Size, Media, Info as PaintInfo, Margins as PaintMargins } from './pages/previews/PaintInfo'
import { Dates as DigDates, Titles as DigTitles, ClassInfo as DigClassInfo, Size as DigSize, Media as DigMedia, Info as DigInfo, Margins as DigMargins} from './pages/previews/DigInfo'
import { Messages } from './Messages'
import { Sidebar } from './sidebar/Sidebar'

function App() {

  const { height, width } = useWindowDimensions()
  const [scrollPos, setScrollPos] = React.useState(0)
  const [project, setProject] = React.useState(100)
  

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

  const opacity = 1.0 - (scrollPos / height)

  function handleSwitch(num, scroll, home) {
    const point = home ? 0 : height
    setProject(num)
    if (scroll) {
      window.scrollTo({top: point, behavior: "smooth"})
    }
  }

  const getLast = (curr) => {
    return curr - 1 === -1 ? 6 : curr - 1
  }
  
  const getNext = (curr) => {
    return curr + 1 === 7 ? 0 : curr + 1
  }

  return (
    <div className="App">
      <Messages width={width} height={height} />
      {width >= 420 && height >= 420 &&
        <>
          <div className="first-page">
            <div className="splash-page-wrapper">
            <Sidebar width={width} handleSwitch={handleSwitch}/>
              <SplashPage width={width} opacity={opacity} handleSwitch={handleSwitch} />
            </div>
          </div>
          <div 
            className="second-page" style={{
              marginTop: (100 / width) * 1000
            }}>
            {project===100 && 
              <div className="previews-wrapper">
              {Dates.map((date, index) => {
                return (
                  <Preview index={index + 1} date={date} title={Titles[index]} classInfo={ClassInfo[index]} skills={Skills[index]} tools={Tools[index]} info={Info[index]} handleSwitch={() => {handleSwitch(index)}} id={100} format={Format[index]} />
                )
              })}
              </div>
            }
            {project===102 && 
              <div className="previews-wrapper">
              {PaintDates.map((date, index) => {
                return (
                  <Preview index={index + 1} date={date} title={PaintTitles[index]} classInfo={PaintClassInfo[index]} skills={Size[index]} tools={Media[index]} info={PaintInfo[index]} handleSwitch={() => {handleSwitch(index)}} id={102} height={height} margin={PaintMargins[index]} />
                )
              })}
              </div>
            }
            {project===103 && 
              <div className="previews-wrapper">
              {DigDates.map((date, index) => {
                return (
                  <Preview index={index + 1} date={date} title={DigTitles[index]} classInfo={DigClassInfo[index]} skills={DigSize[index]} tools={DigMedia[index]} info={DigInfo[index]} handleSwitch={() => {handleSwitch(index)}} id={103} height={height} margin={DigMargins[index]} />
                )
              })}
              </div>
            }
            {project===104 && 
              <AboutBox />
            }
            {project===101 &&
              <div style={{height: "100vh", width: "50vw", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3vw", fontFamily: "Libre Baskerville"}}>Coming soon!</div>
            }
            {project<100 && 
              <Project id={project} format={Format[project]}
                last={() => {handleSwitch(getLast(project), false, false)}} 
                next={() => {handleSwitch(getNext(project), false, false)}} 
                home={() => {handleSwitch(100, false, false)}}
              />}
          </div>
        </>
      }
    </div>
  );
}

export default App;