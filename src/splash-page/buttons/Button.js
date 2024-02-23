import React from 'react'
import '../../css/App.css'

export const Button = (props) => {
    const [isMouseEntered, setIsMouseEntered] = React.useState(false)
    const [isPressed, setIsPressed] = React.useState(false)

    const className = props.className
    const name = props.name
    const square = props.square
    const link = props.link
    const nav = props.nav

    const buttonStyle = {
        width: square && isPressed ? 69 : square && !isPressed ? 45 : !square && isPressed ? 168 : 160,
        height: square && isPressed ? 69 : square && !isPressed ? 45 : !square && isPressed ? 33 : 25,
        borderBottom: isPressed ? "none" : square ? "12px solid gray" : "4px solid gray",
        borderRight: isPressed ? "none" : square ? "12px solid lightgray" : "4px solid lightgray",
        borderTop: isPressed ? "none" : square ? "12px solid #fafafa" : "4px solid #fafafa",
        borderLeft: isPressed ? "none" : square ? "12px solid #E7E7E7" : "4px solid #E7E7E7",
        borderRadius: 4,
        fontFamily: "Silkscreen",
        fontSize: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isMouseEntered ? "pointer" : "default",
        filter: isPressed ? "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))" : "none",
        textAlign: "center",
        filter: "drop-shadow(2px 2px 0px black)",
        marginTop: "10%"
    }

    function handleMouseDown() {
        setIsPressed(true)
    }

    function handleMouseUp() {
        setIsPressed(false)
    }

    function handleMouseEnter() {
        setIsMouseEntered(true)
    }

    function handleMouseLeave() {
        setIsMouseEntered(false)
        setIsPressed(false)
    }

    return (
        <>
                {link && <a style={{color: "black", textDecoration: "none"}} href={nav} target="_blank">
                <div 
                    className={className} 
                    style={buttonStyle}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {name}
                </div>
                </a>}
                {!link && <div 
                    className={className} 
                    style={buttonStyle}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => props.handleSwitch(nav, true, false)}
                >
                    {name}
                </div>}
                </>
    )
}