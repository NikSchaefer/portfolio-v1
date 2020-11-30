import React from 'react'
import Title from '../Components/SectionTitle'
import goTo from '../Images/GoTo.svg'

import k5 from '../Images/Exp/K5.png'
import sparks from '../Images/Exp/Sparks.png'
import spiral from '../Images/Exp/spiral.png'
import tec from '../Images/Exp/tec.png'


function Section(props) {
    return (
        <div className='exp-div'>
            <img src={props.image} style={{backgroundColor:props.color}} className='exp-img' alt="" />
            <div className='exp-info-div'>
                <h4 className='exp-info-title'>{props.position} <a href={props.link}><img style={{ width: '30px' }} src={goTo} alt='' /></a></h4>
                <p className='exp-info-text'>{props.company}</p>
            </div>
            <p className='exp-timeline'>{props.timeline}</p>

        </div>
    )
}

export default function Experience() {
    return (
        <div>
            <Title titleId='title-exp' hr='hr-exp' title='Experience' />

            <Section color='#9e2e2d' link='https://sparksvolleyballclub.vercel.app/' image={sparks} position="Freelance" company="Sparks VB Club" timeline="Oct 2020 - Present" />
            <Section color='white' link='https://spiralesports.vercel.app/' image={spiral} position="Freelance" company="Spiral Esports" timeline="Sep 2020 - Present" />
            <Section color='white' link='https://www.theesportcompany.com/' image={tec} position="Intern" company="The Esport Company" timeline="Sep 2020 - Dec 2020" />
            <Section color='#0f0f0f' link='https://k5gaming.vercel.app/' image={k5} position="Freelance" company="K5 Gaming" timeline="Sep 2020 - Nov 2020" />

        </div>
    )
}