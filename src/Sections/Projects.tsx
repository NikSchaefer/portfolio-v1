import React from 'react'
import portfolio from '../Images/Projects/Portfolio.png'
import Stock from '../Images/Projects/Stock.png'
import devtools from '../Images/Projects/DevTools.png'
import Title from './SectionTitle'
import { ArrowSvg, socialSvg } from '../Images/svg'

import GoTo from '../Images/GoTo.svg'

function Project(props: { title: string, description: string, image: any, github: string, link: string, skills: string[] }) {
    function Links(props: { skills: string[] }): any {
        let out = []
        for (let i = 0; i < props.skills.length; i++) {
            out.push(<p className='project-tag' key={`project-tag-${i}`}>#{props.skills[i]}</p>)
        }
        return out
    }
    return (
        <div className='project-div'>
            <img src={props.image} alt='' className='project-img' />
            <div className='project-info'>
                <p className='project-title'>{props.title}</p>
                <p className='project-text'>{props.description}</p>
                <div className='project-tag-div'>
                    <Links skills={props.skills} />
                </div>
                <div className='project-link-div'>
                    <p onClick={function (e) { e.preventDefault(); window.open(props.github) }} className='project-link'>{socialSvg.github({ class: 'project-link-img' })}</p>
                    <p onClick={function (e) { e.preventDefault(); window.open(props.link) }} className='project-link'>{<img alt='' className='project-link-img' src={GoTo} />}</p>
                </div>
            </div>
        </div>
    )
}
export default function Projects() {
    return (
        <div className='project-primary-div'>
            <ArrowSvg id='project-arrow' height='90' color='var(--color-accent)' />
            <Title titleId='title-project' hr='hr-project' title='Projects' />
            <div id='projects'>
                <Project
                    title='Stock Prediction'
                    description='Upcoming Project: Stock Prediction Machine Learning Model Built with Tensorflow and + Python using Alphavantage Stock API'
                    image={Stock}
                    github='https://github.com/NikSchaefer/'
                    link=''
                    skills={['Tensorflow', 'Python']}
                />
                <Project
                    title='Dev Tools'
                    description='Open Source Website used to easily compare services and frameworks. Designed to be able to easily contribute data.'
                    image={devtools}
                    github='https://github.com/NikSchaefer/Web-Tools'
                    link='https://development-tools.vercel.app/'
                    skills={['React', 'HTML', 'CSS', "Javascript"]}
                />
                <Project
                    title='Portfolio'
                    description='This Very Portfolio Before you. Deployed with Vercel'
                    image={portfolio}
                    github='https://github.com/NikSchaefer/portfolio'
                    link="https://nikschaefer.vercel.app/"
                    skills={['React', 'HTML', 'CSS', "Javascript"]}
                />
            </div>
        </div>
    )
}