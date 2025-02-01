import { React } from 'react'
import { motion } from "framer-motion"
import { Download } from './Icons'

export default function SlidingResume({ isMoved }) {

    return (
        <motion.div 
            className="resume-window"
            animate={{x: isMoved ? "-100%" : 0}}
            transition={{type: "spring", stiffness: 50}}
        >
          <div 
            className="paper-clip"
            style={{marginLeft: isMoved ? "-1.75vw" : 0}}
          >
            <a href="https://docs.google.com/document/d/1ZEyrMg_p3rjS8Yxud48Mf20RPDb5acEgVaIoNFjxZNQ/edit?usp=sharing"
            target="_blank" rel="noopener noreferrer">
            <Download />
            </a>
          </div>
          <img className="resume" src={require("./graphics/Resume_Lora.png")}/>
        </motion.div>
    )
}