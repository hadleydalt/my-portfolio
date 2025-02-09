import InfoBlock from "../components/InfoBlock"

function SubPageTemplate({opp, premise, photoPaths, role, tools, scope, duration, team, bgColor}) {
    return (
        <div className="sub-page-big-wrapper">
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
                Hello I am content
            </div>
        </div>
    )
  }
  
  export default SubPageTemplate;