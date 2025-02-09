export default function InfoBlock({title, body, spacer, paddingTop}) {
    return (
        <div 
            className="info-block"
            style={{ paddingBottom: spacer ? "3vh" : 0, paddingTop: paddingTop ? "3vh" : 0}}
        >
            <div className="info-block-title">
                {title}
            </div>
            <div className="info-block-body">
                {body}
            </div>
        </div>
    )
}