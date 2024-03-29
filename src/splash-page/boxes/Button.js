import '../../css/App.css'
import { useState } from 'react'

export const Button = (props) => {
    const link = props.link
    const nav = props.nav

    const [isMouseEntered, setIsMouseEntered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

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
            <div 
                className="Box1-button"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: isMouseEntered ? "pointer" : "default",
                    filter: isPressed ? "drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5)" : "drop-shadow(0px 0px 0px black)",
                    width: props.buttonWidth ? props.buttonWidth : "",
                    height: props.height ? props.height: ""
                }}
                onClick={!link ? () => props.handleSwitch(nav, true, false) : () =>{}}
            >
                {link && <a href={nav} style={{textDecoration: "none", color: "black"}} target="_blank">{props.name}</a>}
                {!link && props.name}
            </div>
    )
}