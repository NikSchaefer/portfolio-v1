import React from 'react'
import umbrella from '../Images/Umbrella.JPG'
import portfolio from '../Images/Portfolio.PNG'
import Box from '../Images/Box.PNG'
import Project from '../Components/Project'
import Title from '../Components/SectionTitle'

const Projects = () => {
    return (
        <div id='projects'>
            <Title title='Projects' />
            <Project
                title='@Umbrella'
                description='Umbrella is a Mobile Weather App that makes calls to an API.
                    Website + Mobile Development'
                image={umbrella}
                github='https://github.com/NikSchaefer/umbrella_website'
                link='https://theumbrella.vercel.app/'
                skills={['React', 'HTML', 'CSS', 'React Native', "Javascript"]}
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
        </div>
    )
}

export default Projects;
