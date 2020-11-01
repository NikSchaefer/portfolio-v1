import React from 'react'


import github from '../Images/github.svg'
import GoTo from '../Images/GoTo.svg'


function links(props) {

    let out = []
    for (let i = 0; i < props.links.length; i++) { 
        out.push(<p className='project-tag'>{props.links[i]}</p>)
    }
    return out
    
}


const Project = (props) => { 

    return (
        <div className='project-div'>
            <div className='project-info'>
                <p className='project-title'>{props.title}</p>
                <p className='project-text'>
                    {props.description}
                    </p>
                <div className='project-tag-div'>
                    <p className='project-tag'>#React</p>
                    <p className='project-tag'>#HTML</p>
                    <p className='project-tag'>#CSS</p>
                    <p className='project-tag'>#Javascript</p>
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