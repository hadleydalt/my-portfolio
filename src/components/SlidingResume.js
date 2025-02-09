import { React } from 'react'
import { motion } from "framer-motion"
import PaperClip from './PaperClip'

export default function SlidingResume({ isMoved, setNewCursor }) {

    return (
        <motion.div 
            className="resume-window"
            animate={{x: isMoved ? "-100%" : 0}}
            transition={{type: "spring", stiffness: 50}}
        >
          <PaperClip isMoved={isMoved} setNewCursor={setNewCursor} />
          <img className="resume" src={require("../graphics/ResumePng.png")} />
        </motion.div>
    )
}