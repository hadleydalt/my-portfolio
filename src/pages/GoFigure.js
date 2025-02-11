import SubPageTemplate from '../components/SubPageTemplate'
import GfFlow from "../graphics/gfflow.png"
import GfVis from "../graphics/gfvis.png"
import GoFigureText from '../texts/GoFigure'

function GoFigure() {
    return (
        <SubPageTemplate 
            opp="Final Project for Senior Portfolio Class at RISD"
            premise={
                <>
                Democratizing access to an elite sport through an intuitive coaching app, <span className="blurText">transforming</span> high-cost training into an accessible digital experience.
                </>
            }
            photoPaths={[GfFlow, GfVis]}
            role={<>
                • User Research
            <br />
                • UI/UX Design
            </>}
            tools={<>
                • Figma
            </>}
            scope={<>
                1. User Research
                <br />
                2. Display and Interaction with Features
            <br />
                3. Design System Components and Logic
            </>}
            duration="May 2024 (1 month)"
            team="Solo Project"
            bgColor="#eba000"
            ComponentProp={GoFigureText}
        />
    )
  }
  
  export default GoFigure;