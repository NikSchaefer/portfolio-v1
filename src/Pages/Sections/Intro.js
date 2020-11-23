import React from 'react'
import { toAbout } from './NavBar'
const Intro = () => {
    return (
        <div>
            <div className="intro-div">
                    <p className='intro-text'>
                        <span role='img' aria-label='wave'>👋</span>I'm <span className='intro-name'>Nik Schaefer.</span><br />
                        I'm a student with a passion for <br />
                        Programming and learning
                    </p>
                    <p className='intro-button' onClick={toAbout} id='intro-button-full'>Learn More</p>
                </div>
        </div>
    )
}
export default Intro;