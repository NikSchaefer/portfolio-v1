import React from 'react'
import umbrella from '../Images/Umbrella.JPG'
import portfolio from '../Images/Portfolio.JPG'
import Box from '../Images/Box.PNG'

import github from '../Images/github.svg'
import GoTo from '../Images/GoTo.svg'

import { toExp } from '../NavBar'
const Projects = () => {
    return (
        <div id='projects'>
            <p className='section-title'>Projects <hr style={{ marginLeft: '5px', width: '60%', color: 'black', verticalAlign: 'middle' }} /></p>

            <div className='project-div'>
                <img src={umbrella} alt='' className='project-img' />
                <div className='project-info'>
                    <p className='project-title'>@Umbrella</p>
                    <p className='project-text'>
                        Umbrella is a Mobile Weather App that makes calls to an API.<br /><br />
                        Website + Mobile Development
                    </p>
                    <div className='project-tag-div'>
                        <p className='project-tag'>#React</p>
                        <p className='project-tag'>#HTML</p>
                        <p className='project-tag'>#CSS</p>
                        <p className='project-tag'>#React Native</p>
                        <p className='project-tag'>#Javascript</p>
                    </div>
                    <div className='project-link-div'>
                        <a href="https://github.com/NikSchaefer/umbrella_website" className='project-link'><img alt='' className='project-link-img' src={github} /></a>
                        <a href="https://theumbrella.vercel.app/" className='project-link'><img alt='' className='project-link-img' src={GoTo} /></a>
                    </div>
                </div>
            </div>

            <div className='project-div'>
                <div className='project-info'>
                    <p className='project-title'>@Portfolio</p>
                    <p className='project-text'>
                        This Very Portfolio Before you
                    </p>
                    <div className='project-tag-div'>
                        <p className='project-tag'>#React</p>
                        <p className='project-tag'>#HTML</p>
                        <p className='project-tag'>#CSS</p>
                        <p className='project-tag'>#Javascript</p>
                    </div>
                    <div className='project-link-div'>
                        <a href="https://github.com/NikSchaefer/portfolio" className='project-link'><img alt='' className='project-link-img' src={github} /></a>
                        <a href="https://nikschaefer.vercel.app/" className='project-link'><img alt='' className='project-link-img' src={GoTo} /></a>
                    </div>
                </div>
                <img src={portfolio} alt='' className='project-img' />

            </div>

            <div className='project-div'>
                <div className='project-info'>
                    <p className='project-title'>@Box Shadow Creator</p>
                    <p className='project-text'>
                        A Simple Website to Quickly and Easily Develop CSS Box Shadows
                    </p>
                    <div className='project-tag-div'>
                        <p className='project-tag'>#React</p>
                        <p className='project-tag'>#HTML</p>
                        <p className='project-tag'>#CSS</p>
                        <p className='project-tag'>#Javascript</p>
                    </div>
                    <div className='project-link-div'>
                        <a href="https://github.com/NikSchaefer/box-shadow-maker" className='project-link'><img alt='' className='project-link-img' src={github} /></a>
                        <a href="https://box-shadow.vercel.app/" className='project-link'><img alt='' className='project-link-img' src={GoTo} /></a>
                    </div>
                </div>
                <img src={Box} alt='' className='project-img' />

            </div>

            <p>Looking for <p className='project-bottom-link' onClick={toExp}>Experience</p>?</p>

        </div>
    )
}

export default Projects;
