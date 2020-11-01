import React from 'react'
import umbrella from '../Images/Umbrella.JPG'
import portfolio from '../Images/Portfolio.JPG'
import Box from '../Images/Box.PNG'


import Project from '../Components/Project'



import { toExp } from './NavBar'
const Projects = () => {
    return (
        <div id='projects'>
            <p className='section-title'>Projects <hr style={{ marginLeft: '5px', width: '60%', color: 'black', verticalAlign: 'middle' }} /></p>

            <Project
                title='@Umbrella'
                description='Umbrella is a Mobile Weather App that makes calls to an API.
                    Website + Mobile Development'
                image={umbrella}
                github='https://github.com/NikSchaefer/umbrella_website'
                link='https://theumbrella.vercel.app/'
                skills={['React', 'HTML', 'CSS','React Native', "Javascript"]}  
            />

            <Project
                title='@Portfolio'
                description='This Very Portfolio Before you'
                image={portfolio}
                github='https://github.com/NikSchaefer/portfolio'
                link="https://nikschaefer.vercel.app/"
                skills={['React', 'HTML', 'CSS', "Javascript"]} 
            />

            <Project
                title='@Box Shadow Creator'
                description='A Simple Website to Quickly and Easily Develop CSS Box Shadows'
                image={Box}
                github='https://github.com/NikSchaefer/box-shadow-maker'
                link='https://box-shadow.vercel.app/'
                skills={['React', 'HTML', 'CSS', "Javascript"]} 
            />

            <p>Looking for <p className='project-bottom-link' onClick={toExp}>Experience</p>?</p>

        </div>
    )
}

export default Projects;
