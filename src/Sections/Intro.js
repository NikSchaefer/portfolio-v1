import React from 'react'
import { Socials } from './Footer'
const Intro = () => {
    return (
        <div className="intro-div">
            <p className='intro-text'>
                <span role='img' aria-label='wave'>👋</span>I'm <span className='intro-name'>Nik Schaefer.</span><br />
                        I'm a student with a passion for
                        Programming and learning
                    </p>

            <Socials margin='unset' />
        </div>
    )
}
export default Intro;