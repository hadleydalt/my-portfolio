import SubPageTemplate from '../components/SubPageTemplate'
import TechPhoto3 from "../graphics/tech photo 3.jpg"
import BmwBlur from "../graphics/bmw blur.png"

function BMW() {
    return (
        <SubPageTemplate 
            opp="UX Engineering Internship at BMW Technology Office of Silicon Valley"
            premise={
                <>
                Changing the way that car settings are <span className="blurText">visualized</span> on our smart phones to more accurately reflect our mental model.
                </>
            }
            photoPaths={[TechPhoto3, BmwBlur]}
            role={<>
                • User Research
            <br />
                • UI/UX Design
            <br />
                • Mobile Engineer
            </>}
            tools={<>
                • Figma
            <br />
                • Qualitative User Study
            <br />
                • Swift
            <br />
                • SwiftUI
            </>}
            scope={<>
                1. Display and Interaction with Car Features
                <br />
                2. Instruction Design
            <br />
                3. Design System Components and Logic
            <br />
            4. Coding Responsive Components in Swift
            <br />
                5. Customer User Research
            <br />
                6. Qualitative User Testing
            </>}
            duration="October-December 2024 (2 months)"
            team="Experience Design Lab"
            bgColor="#0166B1"
        />
    )
  }
  
  export default BMW;