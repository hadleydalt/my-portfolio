import React, { useState, useEffect } from 'react'

export default function CursorMessage({cursor, message, visible}) {

    return (
        <div 
            className="cursor-msg"
            style={{marginLeft: cursor.x + 20, marginTop: cursor.y + 20, opacity: visible ? 1 : 0}}
        >
            {message}
        </div>
    )
}