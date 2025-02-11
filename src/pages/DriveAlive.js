import SubPageTemplate from '../components/SubPageTemplate'
import DriveAliveImgs from "../graphics/drivealiveimgs.png"
import DriveAliveImg2 from "../graphics/da_epochs.JPG"
import DriveAliveText from '../texts/DriveAlive'

function DriveAlive() {
    return (
        <SubPageTemplate 
            opp="Final Project for CS1430: Computer Vision at Brown University"
            premise={
                <>
                Improving road safety by using Computer Vision to <span className="blurText">detect</span> drowsy driving.
                </>
            }
            photoPaths={[DriveAliveImgs, DriveAliveImg2]}
            role={<>
                • Context Research
            <br />
                • UI/UX Design
            <br />
                • Frontend Engineer
            </>}
            tools={<>
                • Figma
            <br />
                • Python
            <br />
                • Flask
            <br />
                • HTML/CSS/JS
            </>}
            scope={<>
                1. Instruction Design
                <br />
                2. Coding User Interface
            <br />
                3. Backend Integration
            </>}
            duration="May 2024 (1 month)"
            team={<>
                • Ivery Chen (UI/UX Design)
                <br />
                • Hadley Dalton (UI/UX Design, Frontend)
            <br />
            • Healey Koch (Backend)
            <br />
            • Dave Song (Model Training and Testing)
            </>}
            bgColor="#01b15e"
            ComponentProp={DriveAliveText}
        />
    )
  }
  
  export default DriveAlive;