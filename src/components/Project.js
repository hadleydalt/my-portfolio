import { React } from 'react'
import { useNavigate } from "react-router-dom";

export default function Project({title, desc, tags, endpoint}) {

    const navigate = useNavigate();

    return (
        <div 
        onClick={() => navigate(String("/" + endpoint))}
        className="project-img-wrapper">
            <div className="project-img">
                <div className="tags-label">
                    {tags.map((tag, index) => (index === 0 ? tag : ` • ${tag}`))}
                </div>
            </div>

            <div className="project-title">
                {title}
            </div>

            <div className="project-desc">
                {desc}
            </div>
        </div>
    )
}