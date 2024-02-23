import React from 'react'
import '../../css/App.css'
import { Button } from './Button'

export const Box1 = (props) => {
    return (
        <div className="Box1-wrapper">
                <div>
                    <div className="Box1-bg">
                    <div className="Box1-exterior">
                    {props.planet && <img src={require('../../graphics/Planet.png')} alt="" className="planet" draggable={false} />}
                <div className="Box1-top-wrapper">
                    <div className="box-top-text">
                        More
                    </div>
                    <div className="white-x">
                        X
                    </div>
                </div>
                <div className="Box1-interior">
                    <img src={require('../../graphics/Art2.png')} style={{objectFit: "cover"}} alt="" className="Box1-image" draggable={false} />
                    <div className="Box1-button-wrapper">
                        <Button name="About" link={false} nav={104} handleSwitch={props.handleSwitch} />
                        <Button name="Resume" link={true} nav="https://drive.google.com/file/d/1nhlNgpAaA78G_4ht7_sIVIxKiRovm8jV/view"  />
                    </div>
                </div>
            </div>
                    </div>
                </div>
        </div>
    )
}
