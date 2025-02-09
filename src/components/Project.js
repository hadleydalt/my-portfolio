import { React } from 'react'

export default function Project({title, desc, tags}) {

    return (
        <div className="project-img-wrapper">
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