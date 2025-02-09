import { React } from 'react'

export default function ResumeButton({ toggleMove, label }) {
    return (
        <button
            onClick={toggleMove}
            className="main-subtitle">{label}
        </button>
    )
}