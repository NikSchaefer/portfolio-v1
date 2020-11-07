import React from 'react'
import { toExp, toBottom } from './NavBar'
const Intro = () => {
    return (
        <div>
            <div className="intro-div">
                <div className='intro-content'>

                <p className='intro-text'>
                    <p className="intro-tiny-text">👋 there!</p>
                    

                    I am <span style={{ color:'var(--color-accent)'}}>Nik Schaefer.</span><br />
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