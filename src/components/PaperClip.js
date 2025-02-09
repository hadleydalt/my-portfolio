import React, { useState, useEffect } from 'react'
import { Download } from '../Icons'

export default function PaperClip({isMoved, setNewCursor}) {

    return (
        <div 
            className="paper-clip"
            style={{marginLeft: isMoved ? "-1.75vw" : 0}}
            onMouseEnter={() => setNewCursor("Download Resume as PDF", true)}
            onMouseLeave={() => setNewCursor("hellooo", false)}
          >
            <a href="https://docs.google.com/document/d/1ZEyrMg_p3rjS8Yxud48Mf20RPDb5acEgVaIoNFjxZNQ/edit?usp=sharing"
            target="_blank" rel="noopener noreferrer">
            <Download />
            </a>
          </div>
    )
}