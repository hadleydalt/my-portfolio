const DashText = () => {
    return (
        <div className="text-body-wrapper">
            <div className="text-heading">Overview</div>
            <div className="text-img-wrapper">
                <div className="text-body-wrapper-col">
                    <div className="text-subheading">Dash is an IDE</div>
                    <div className="text-body">
                        DASH is an IDE for document-based networks developed by Andy Van Dam at Brown University.
                    </div>

                    <div className="text-subheading">Dash is a canvas</div>
                    <div className="text-body">
                        Essentially it is a canvas that can be populated with notes in different formats.
                    </div>

                </div>
                <img src={require("../graphics/dashimg1.png")} style={{width: "35vw"}}/>
            </div>

            <div className="text-heading">The Problem</div>

            <div className="text-subheading">Why this redesign?</div>
                    <div className="text-body">
                        Several features of Dash's UI made it difficult to navigate and use. 
                    </div>
            <div className="text-subheading">The functionality of DASH required simplification to more accurately reflect our mental model. </div>

            <div className="text-heading">Research</div>
        </div>
    )
}

export default DashText