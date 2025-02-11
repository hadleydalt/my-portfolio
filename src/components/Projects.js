import { React } from 'react'
import Project from './Project'

export default function Projects() {

    return (
      <div>
        <div className="projects-heading">Featured Projects</div>
        <div className="projects-wrapper">
          <Project title="MyBMW" desc="Redefining user interaction with car features" tags={["UX Design", "UX Research", "Mobile"]} endpoint="bmw"/>
          <Project  title="DASH: A Notetaking System" desc="Redesigning the intuition note-taking and file storage" tags={["UX Design", "Fullstack"]} endpoint="dash"/>
          <Project  title="DriveAlive" desc="Detecting and mitigating drowsy driving through Convolutional Neural Networks" tags={["Product Design", "Fullstack", "Computer Vision"]} endpoint="drive-alive"/>
          <Project  title="GoFigure" desc="Democratizing access to an elite sport through an intuitive coaching app" tags={["UX Design", "Product Design"]} endpoint="go-figure"/>
        </div>

        <div className="projects-heading">Other Work</div>
        <div className="projects-wrapper">
          <Project title="Pet Garden: Desktop Game" desc="Boost your productivity by collecting pets" tags={["OOP Principles", "Java"]}/>
          <Project  title="Cat Finder: VR Game" desc="Find your missing cat while engaging with a soothing neighborhood" tags={["VR/AR", "Meta Quest", "Unity", "Blender"]}/>
          <Project  title="Soma: Pain Manager App" desc="An intuitive logging and tracking system for those with chronic pain" tags={["Shipped Product", "Research Lab", "Frontend"]}/>
          <Project  title="Ray Tracer" desc="Simulating light, shadow, reflection, and texture by parsing XML files" tags={["Graphics", "Lighting Models", "Intersection Algos", "OpenGL"]}/>
        </div>
        </div>
    )
}

//  transforming high-cost training into an accessible digital experience