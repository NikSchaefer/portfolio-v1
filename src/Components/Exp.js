import React from 'react'
import GoTo from '../Images/GoTo.svg'

function handle(id) { // sets all elements inactive and then selects the clicked element
    const allOptionElements = document.getElementsByClassName('exp-option');
    for (var i = 0; i < allOptionElements.length; i++) {
        allOptionElements[i].style.backgroundColor = 'transparent'
    }
    const elementToChange = document.getElementById(id + '-selector');
    elementToChange.style.backgroundColor = 'var(--accent)';

    const allContentElements = document.getElementsByClassName('exp-content-div')
    for (var j = 0; j < allContentElements.length; j++) {
        allContentElements[j].style.display = 'none'
    }
    const contentToChange = document.getElementById(id)
    contentToChange.style.display = 'block'
}
export const Options = (props) => {
    return <p className='exp-option' id={`${props.theID}-selector`} onClick={() => handle(props.theID)}>{props.title}</p>
}

const SkillsExp = (props) => {
    let out = []
    for (let i = 0; i < props.skills.length; i++) {
        out.push(<p className='exp-skill' key={i}>#{props.skills[i]}</p>)
    }
    return out;
}
const Content = (props) => {
    return (
        <div className='exp-content-div' id={props.theID}>
            <div className='exp-content'>
                <p className='exp-content-title'>@{props.title} <a href={props.link} onClick={function (e) { e.preventDefault(); window.open(props.link)}} style={{ visibility: `${props.linkVisibility}` }} className='exp-link'><img alt='' className='exp-link-img' src={GoTo} /></a></p>

                <p className='exp-content-sub-title'>{props.info}</p>
                <ul>
                    <li>{props.description1}</li>
                    <br />
                    <li>{props.description2}</li>
                    <br />
                    <SkillsExp skills={props.skills} />
                </ul>
            </div>
        </div>
    )
}
export default Content;