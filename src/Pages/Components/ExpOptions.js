import React from 'react'

function handle(id) { // sets all elements inactive and then selects the clicked element
    const allOptionElements = document.getElementsByClassName('exp-option');
    for (var i = 0; i < allOptionElements.length; i++) {
        allOptionElements[i].style.backgroundColor = 'transparent'
    }
    const elementToChange = document.getElementById(id + '-selector');
    elementToChange.style.backgroundColor = 'var(--color-accent)';

    const allContentElements = document.getElementsByClassName('exp-content-div')
    for (var j = 0; j < allContentElements.length; j++) {
        allContentElements[j].style.display = 'none'
    }
    const contentToChange = document.getElementById(id)
    contentToChange.style.display = 'block'
}
const Options = (props) => {
    return <p className='exp-option' id={`${props.theID}-selector`} onClick = {() => handle(props.theID)}>{props.title}</p>
}
export default Options;