import SubPageTemplate from '../components/SubPageTemplate'
import Dash1 from "../graphics/previews/1.gif"
import Dash2 from "../graphics/previews/1.png"
import DashText from "../texts/Dash"

function Dash() {
    return (
        <SubPageTemplate 
            opp="Optional Challenge for CS0150: Intro to OO at Brown University"
            premise={
                <>
                Reimagining the <span className="blurText">intuition</span> of note taking and file storage to more accurately reflect our mental model.
                </>
            }
            photoPaths={[Dash1, Dash2]}
            role={<>
                • UI/UX Design
            <br />
                • Frontend Engineer
            <br />
                • Backend Engineer
            </>}
            tools={<>
                • Figma
            <br />
                • React
            <br />
                • Node.js
            <br />
                • Express
            <br />
                • MongoDB
            </>}
            scope={<>
                1. Display and Interaction with Car Features
                <br />
                2. Instruction Design
            <br />
                3. Identifying and Adddressing Pain Points
            <br />
            4. Developing and Testing Responsive Web App
            </>}
            duration="May 2021 (1 month)"
            team="Solo Project"
            bgColor="#b10171"
            ComponentProp={DashText}
        />
    )
  }
  
  export default Dash;

