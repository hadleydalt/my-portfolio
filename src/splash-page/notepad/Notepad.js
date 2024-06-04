import React from 'react'
import '../../css/App.css'
import { NotepadMenuOpt } from './NotepadMenuOpt'
import { TitleBox } from '../../sidebar/TitleBox'

export const Notepad = (props) => {
    const height = props.height.toString()
    const [clicked, setClicked] = React.useState(false)

    const menuOptions = ["File", "Edit", "Format", "View", "Help"]

    return (
        <div className="Notepad-wrapper">
            <div className="Notepad-bg">
                <div className="Notepad-exterior">
                    <div className="Notepad-header">
                        <div className="Notepad-header-wrapper">
                            <div className="Notepad-title">Note Pad</div>
                            <div className="Notepad-x">x</div>
                        </div>
                    </div>
                    <div className="Notepad-menu">
                        {menuOptions.map((o, index) => {
                            return (
                                <NotepadMenuOpt key={index} name={o} selected={o==="Edit"}/>
                            )
                        })}
                    </div>
                    <div 
                        className="Notepad-enter-wrapper" 
                        style={{height: String((props.height - 80) + "px")}}
                        onClick={() => {
                            setClicked(true)
                        }}
                    >
                        {/*<textarea placeholder={ph} className="Notepad-enter" style={{height: String((props.height - 80) + "px"), fontFamily: "Work Sans"}} name="Text1" cols="40" rows="5"></textarea>*/}
                        <div className="Notepad-enter">
                            <div style={{padding: "0.5rem"}}>
                                <div style={{fontFamily: "PT Serif", fontSize: "1.3vw", marginTop: "5%"}}>
                                    I'm Hadley.
                                </div>
                                <div style={{fontFamily: "Work Sans", fontSize: "0.9rem", marginTop: "5%", fontSize: "1vw"}}>
                                I am a full-stack and mobile developer, a 0-1 product designer, and a graphics artist. Across all three of these fields I tell stories, inspire engagement and wonder, and build communities!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}