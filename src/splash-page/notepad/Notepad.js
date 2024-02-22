import React from 'react'
import '../../css/App.css'
import { NotepadMenuOpt } from './NotepadMenuOpt'

export const Notepad = (props) => {
    const height = props.height.toString()
    const [clicked, setClicked] = React.useState(false)

    const menuOptions = ["File", "Edit", "Format", "View", "Help"]

    return (
        <div className="Notepad-wrapper" style={{height: String(height + "px")}}>
            <div className="Notepad-bg" style={{height: String(height + "px")}}>
                <div className="Notepad-exterior" style={{height: String((props.height - 10) + "px")}}>
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
                        <div style={{height: String((props.height - 80) + "px")}} className="Notepad-enter">
                            <div style={{padding: "0.5rem"}}>
                                <div style={{fontFamily: "Libre Baskerville", fontSize: "1.3vw", marginTop: "0.5rem"}}>
                                    I'm Hadley.
                                </div>
                                <div style={{fontFamily: "Work Sans", fontSize: "0.9rem", marginTop: "0.5rem", fontSize: "1vw"}}>
                                A cross-disciplinary developer, experimental aestheticist, and lover of the details. In the Dual Degree Program at <b>Brown University</b> and the <b>Rhode Island School of Design</b>, I design projects that enable new possibilities and make a difference in people's lives!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}