import React from 'react'

function handle(id) { // sets all elements inactive and then selects the clicked element
    const all = document.getElementsByClassName('exp-option');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = 'transparent'
    }
    const change = document.getElementById(id + '-selector');
    change.style.backgroundColor = 'rgb(255, 194, 0)';

    const allContent = document.getElementsByClassName('exp-content-div')
    for (var j = 0; j < allContent.length; j++) {
        allContent[j].style.display = 'none'
    }
    const changeContent = document.getElementById(id)
    changeContent.style.display = 'block'
}
window.onload = function () { // set original active state
    const selector = document.getElementsByClassName('exp-option')
    selector[0].style.backgroundColor = 'rgb(255, 194, 0)'

    const content = document.getElementsByClassName('exp-content-div')
    content[0].style.display = 'block'
}

const Options = (props) => {
    // const all = document.getElementsByClassName('exp-content-div') // finding all content divs
    // console.log(all.length)
    // let out = []
    // for (let i = 0; i < all.length; i++) { // makes elemn
    //     console.log('we get here')
    //     out.push(
    //         <p className='exp-option'
    //             id='Spiral-selector'
    //             onClick={() => handle('Spiral')}>Spiral Esports</p>
    //     )
    // }
    // console.log(out)
    // return out;

    // Code above is in the works

    return <p className='exp-option' id={`${props.theID}-selector`} onClick = {() => handle(props.theID)}>{props.title}</p>






}
export default Options;