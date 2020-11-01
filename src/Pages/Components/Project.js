import React from 'react'
import github from '../Images/github.svg'
import GoTo from '../Images/GoTo.svg'

function Links(props) {
    let out = []
    for (let i = 0; i < props.skills.length; i++) {
        out.push(<p className='project-tag'>#{props.skills[i]}</p>)
    }
    return out
}
const Project = (props) => {
    return (
        <div className='project-div'>
            <div className='project-info'>
                <p className='project-title'>{props.title}</p>
                <p className='project-text'>{props.description}</p>
                <div className='project-tag-div'>
                    <Links skills={props.skills} />
                </div>
                <div className='project-link-div'>
                    <a href={props.github} className='project-link'><img alt='' className='project-link-img' src={github} /></a>
                    <a href={props.link} className='project-link'><img alt='' className='project-link-img' src={GoTo} /></a>
                </div>
            </div>
            <img src={props.image} alt='' className='project-img' />
        </div>
    )
}
export default Project;