import React from 'react'
import '../css/App.css'
import { Col1, Col2, Col3 } from './Columns'
import { Horizontal, Vertical } from '../Background'

export const SplashPage = (props) => {

    const width = props.width
    const opacity = props.opacity
    const scrollPos = props.scrollPos

    console.log(String(60 + (scrollPos/100)) + "%")

    return (
        <>
            <Vertical color="#f2f2f2" opacity={opacity}/>
            <Horizontal color="#f2f2f2" opacity={opacity}/>
            <div style={{width: "100vw", height: "100vh", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>
                <img src={require("../graphics/constellations.png")} style={{width: "60%", opacity: "60%", transform: String("rotate(" + scrollPos / 4 + "deg)")}}></img>
                <div style={{height: "70vh", display: "flex", flexDirection: "column", marginTop: "-60vh"}}>
                    <img src={require("../graphics/Hadley.png")} style={{width: "40%", alignSelf: "center", marginLeft: String("-" + String((scrollPos / 10) + 15) + "vw")}}></img>
                    <img src={require("../graphics/Dalton.png")} style={{width: "40%", alignSelf: "center", marginTop: "-6vh", marginLeft: String(String(15 - (scrollPos / 10)) + "vw")}}></img>
                    <img src={require("../graphics/desc.png")} style={{width: "40%", alignSelf: "center", marginLeft: String("-" + scrollPos / 10 + "vw")}}></img>
                </div>
            </div>
        </>
    )
}