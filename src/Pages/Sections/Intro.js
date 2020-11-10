import React from 'react'
import { toExp, toBottom } from './NavBar'
const Intro = () => {

    // fetch('http://127.0.0.1:8000/article/data?format=json')
    //     .then(response => response.json())
    //     .then(function (data) {
    //         console.log(data)
    //     }).catch(function () {
    //         console.log('failed')
    //     })
    return (
        <div>
            <div className="intro-div">
                <div className='intro-content'>
                    <p className="intro-tiny-text"><span role='img' aria-label='wave'>👋</span> there!</p>
                    <p className='intro-text'>
                    I am <span className='intro-name'>Nik Schaefer.</span><br />
                    I'm a student with a passion for <br />
                    Programming and learning<br />
                    </p>
                    <p className='intro-button' onClick={toExp} id='intro-button-full'>Learn More</p>
                    <p onClick={toBottom} className='intro-button' id='intro-button-transparent'>Get In Touch</p>
                </div>
            </div>
        </div>
    )
}
export default Intro;