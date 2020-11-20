import React from 'react'
import github from '../Images/github.svg'
import GoTo from '../Images/GoTo.svg'

function Links(props) {
    let out = []
    for (let i = 0; i < props.skills.length; i++) {
        out.push(<p className='project-tag' key={`project-tag-${i}`}>#{props.skills[i]}</p>)
    }
    return out
}
const Project = (props) => {
    return (
        <div className='project-div'>
            <img src={props.image} alt='' className='project-img' />
            <div className='project-info'>
                <p className='project-title'>{props.title}</p>
                <p className='project-text'>{props.description}</p>
                <div className='project-tag-div'>
                    <Links skills={props.skills} />
                </div>
                <div className='project-link-div'>
                    <p onClick={function (e) { e.preventDefault(); window.open(props.github) }} className='project-link'><img alt='' className='project-link-img' src={github} /></p>
                    <p onClick={function (e) { e.preventDefault(); window.open(props.link) }} className='project-link'><img alt='' className='project-link-img' src={GoTo} /></p>
                </div>
            </div>
        </div>
    )
}
export default Project;