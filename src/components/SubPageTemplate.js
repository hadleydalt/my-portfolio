import InfoBlock from "../components/InfoBlock"
import { useNavigate } from "react-router-dom";

function SubPageTemplate({opp, premise, photoPaths, role, tools, scope, duration, team, bgColor, ComponentProp }) {

    const navigate = useNavigate();

    return (
        <div className="sub-page-big-wrapper">
            <button 
            onClick={() => navigate("/")}
            className="return-home">Return Home</button>
        <div className="sub-page-wrapper" style={{background: bgColor}}>
            <div className="sub-page-content-first">
            <div className="sub-page-content">
                <div className="sub-page-info">
                    <div className="opp">
                        {opp}
                    </div>
                    <div className="premise">
                        {premise}
                    </div>
                    <div className="divider" />
                    <div className="sub-info-wrapper">
                        <div className="sub-info-col">
                            <InfoBlock 
                                title="My Role"
                                body={role}
                                spacer={true}
                                paddingTop={false}
                            />
                            <InfoBlock 
                                title="Tools"
                                body={tools}
                                spacer={false}
                                paddingTop={true}
                            />
                        </div>
                        <div className="sub-info-col">
                        <InfoBlock 
                                title="My Scope"
                                body={scope}
                                spacer={false}
                                paddingTop={false}
                            />
                        </div>
                        <div className="sub-info-col">
                        <InfoBlock 
                                title="Duration"
                                body={duration}
                                spacer={true}
                                paddingTop={false}
                            />
                            <InfoBlock 
                                title="Team"
                                body={team}
                                spacer={false}
                                paddingTop={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="photo-col-wrapper">
                    <div className="photo-col">
                        {photoPaths.map((img, index) => {
                            return (
                            <img key={index} className="photo-img" src={img} />
                            )
                        })}
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="sub-page-content">
                <ComponentProp />
            </div>
        </div>
    )
  }
  
  export default SubPageTemplate;