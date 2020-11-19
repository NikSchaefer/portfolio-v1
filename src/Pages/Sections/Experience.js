import React from 'react'
import Content from '../Components/Exp'
import Options from '../Components/ExpOptions'
import Title from '../Components/SectionTitle'

export function loadExp() { // set original active state
    const selector = document.getElementsByClassName('exp-option')
    selector[0].style.backgroundColor = 'var(--accent)'
    const content = document.getElementsByClassName('exp-content-div')
    content[0].style.display = 'block'
}
const Experience = () => {
    return (
        <div>
            <Title titleId='title-exp' hr='hr-exp' title='Experience ' />
            <div className='exp-container' id='experience'>
                <Content
                    theID='Spiral'
                    title='Spiral Esports'
                    info='Freelance | Sep 2020 - Nov 2020'
                    description1='Spiral Esports is an Orginization providing competitive experiences for its players and community'
                    description2='I designed and developed a website for Spiral Esports from scratch'
                    skills={['React', 'HTML', 'CSS', 'Javascript', 'Vercel']}
                    linkVisibility='hidden'
                />
                <Content
                    theID='Sparks'
                    title='Sparks Volleyball Club'
                    info='Freelance | Oct 2020 - Present'
                    description1='Sparks Volleyball Club is a Volleyball Club based in Las Vegas, NV'
                    description2='I designed and developed a site from scratch working directly with a team member and client'
                    skills={['React', 'HTML', 'CSS', 'Javascript', 'Vercel']}
                    linkVisibility='hidden'
                />
                <Content
                    theID='TEC'
                    title='The Esport Company'
                    info='Internship | Sep 2020 - Present'
                    description1='The Esport Company provides High Schools, Universities ,and Amatuers the tools and resources to build their programs from the beginning!'
                    description2='I designed and developed a new website with a team to fit a growing buisness'
                    skills={['Wordpress', 'Elementor', 'CSS']}
                    link='https://www.theesportcompany.com/'
                />
                <Content
                    theID='K5'
                    title='K5 Gaming'
                    info='Freelance | Sep 2020 - Nov 2020'
                    description1='K5 Gaming is an Orginization providing competitive experiences for all its memebers'
                    description2='I designed and developed a website for K5 Gaming from scratch working directly with the Client'
                    skills={['React', 'HTML', 'CSS', 'Javascript', 'Vercel']}
                    link='https://k5gaming.vercel.app/'
                />
                <Content
                    theID='Nebula'
                    title='Nebula Esports'
                    info='Freelance | Sep 2020 - Nov 2020'
                    description1='Nebula Esports is an Orginization sponsoring teams and managing a league'
                    description2='I designed and developed a website for Nebula Esports from scratch'
                    skills={['React', 'HTML', 'CSS', 'Javascript', 'Vercel']}
                    link='https://nebulaesports.vercel.app/'
                />

                <div className='exp-options-div'>
                    <div className='exp-options-list'>
                        <Options theID='Spiral' title="Spiral Esports" />
                        <Options theID='Sparks' title="Sparks VB Club" />
                        <Options theID='TEC' title="The Esport Company" />
                        <Options theID='K5' title="K5 Gaming" />
                        <Options theID='Nebula' title="Nebula Esports" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;