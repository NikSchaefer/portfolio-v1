import React from 'react'
import { Socials } from './Footer'
export default function Intro ()  {
    return (
        <div className="intro-div">
            <div>
                <h5><span role='img' aria-label='wave'>👋, my name is </span></h5>
                <h2>Nik Schaefer.</h2>
                <h2 >Eat. Sleep. Code. Repeat.</h2>
                <p>
                    I'm a student with a passion for
                    Programming and learning</p>
                <Socials margin='0 10px' />
            </div>
        </div>
    )
}