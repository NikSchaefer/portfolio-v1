import Title from './SectionTitle'
import goTo from '../Images/GoTo.svg'

import k5 from '../Images/Exp/server.svg'
import sparks from '../Images/Exp/script.svg'
import spiral from '../Images/Exp/api.svg'
import tec from '../Images/Exp/database.svg'

function Section(props: { image: any, position: string, timeline: string, company: string, link: string }) {
    return (
        <div className='exp-div'>
            <img src={props.image} style={{ backgroundColor: 'white' }} className='exp-img' alt="" />
            <div className='exp-info-div'>
                <h4 className='exp-info-title'>{props.position} <a
                    href={props.link} onClick={function (e) { e.preventDefault(); window.open(props.link) }}>
                    <img style={{ width: '30px' }} src={goTo} alt='' /></a>
                </h4>
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
            <div id='exp-div'>
                <Section link='#' image={k5} position="Freelance" company="NVC" timeline="Dec - Present" />
                <Section link='https://sparksvbclub.vercel.app/' image={tec} position="Freelance" company="Sparks VB Club" timeline="Oct 2020 - Dec 2020" />
                <Section link='https://spiralesports.vercel.app/' image={spiral} position="Freelance" company="Spiral Esports" timeline="Sep 2020 - Present" />
                <Section link='https://www.theesportcompany.com/' image={sparks} position="Intern" company="The Esport Company" timeline="Sep 2020 - Dec 2020" />
                <Section link='https://k5gaming.vercel.app/' image={k5} position="Freelance" company="K5 Gaming" timeline="Sep 2020 - Nov 2020" />
            </div>
        </div>
    )
}