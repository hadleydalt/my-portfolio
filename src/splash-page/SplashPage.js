import React from 'react'
import '../css/App.css'
import { Col1, Col2, Col3 } from './Columns'
import { Horizontal, Vertical } from '../Background'

export const SplashPage = (props) => {

    const width = props.width
    const opacity = props.opacity

    return (
        <>
            <Vertical color="#EEDFB1" opacity={opacity}/>
            <Horizontal color="#EEDFB1" opacity={opacity}/>
            <div className="splash-page" style={{justifyContent: "space-evenly"}}>
                <Col1 handleSwitch={props.handleSwitch} />
                <Col2 handleSwitch={props.handleSwitch} />
                <Col3 handleSwitch={props.handleSwitch} />
            </div>
        </>
    )
}