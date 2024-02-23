import React from 'react'
import '../css/App.css'
import { Box1 } from './boxes/Box1'
import { Box2 } from './boxes/Box2'
import { Notepad } from './notepad/Notepad'
import { Image } from './Image'
import { PaintBox } from './paintbox/PaintBox'
import { ThreeButtons } from './buttons/ThreeButtons'
import { squareButtonNames } from '../Constants'
import { nonSquareButtonNames } from '../Constants'
import { nonSquareLinks } from '../Constants'
import { nonSquareNavs } from '../Constants'
import { squareLinks } from '../Constants'
import { squareNavs } from '../Constants'

export const Col1 = (props) => {

    return (
        <div className="sp-col-1">
                <>
                    <Notepad height={330}/>
                    <ThreeButtons square={true} names={squareButtonNames} links={squareLinks} navs={squareNavs} handleSwitch={props.handleSwitch}/>
                </>
        </div>
    )
}

export const Col2 = (props) => {
    return (
        <div className="sp-col-2">
            <Box2 height={220} handleSwitch={props.handleSwitch} />
            <div className="icons-container">
                <Image source='Papers' width={130}/>
                <Image source='Folder' width={130}/>
            </div>
            <PaintBox />
        </div>
    )
}

export const Col3 = (props) => {
    return (
        <div className="sp-col-3">
            <Box1 planet={true} bg={true} handleSwitch={props.handleSwitch} />
            <ThreeButtons square={false} names={nonSquareButtonNames} links={nonSquareLinks} navs={nonSquareNavs} handleSwitch={props.handleSwitch} />
        </div>
    )
}