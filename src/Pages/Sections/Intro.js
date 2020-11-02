import React from 'react'
import { toExp } from './NavBar'
const Intro = () => {
    return (
        <div>
            <div className="intro-div">
                <div className='intro-content'>

                <p className='intro-text'>
                    <p className="intro-tiny-text">👋 there!</p>
                    

                    I am <span style={{color:'orange'}}>Nik Schaefer.</span><br />
                    I'm a student with a passion for <br />
                    Programming and learning<br />
                    </p>
                    <p className='intro-button' onClick={toExp} id='intro-button-full'>Learn More</p>
                    <a href="mailto:nikkschaefer@gmail.com" className='intro-button' id='intro-button-transparent'>Get In Touch</a>
                </div>
            </div>
        </div>
    )
}
export default Intro;