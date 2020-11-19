import React from 'react';
import Title from '../Components/SectionTitle'
const About = () => {
    return (
        <div className='about-primary' >
            <Title titleId='title-about' hr='hr-about' title='About ' />
            <div className='about-div' id='about'>
                <p className='about-text'>
                    <span role='img' aria-label='wave'>👋</span>Im <span style={{ color: 'var(--accent)' }}>Nik</span>,<br /><br />
                    I'm self-taught full-stack developer and a high school student
                    <br />
                    based in Minnesota, US <br /><br />
                    I have taken on roles of design, research and development.<br />
                    In my free time I like to contribute to open source projects, build my own projects, and further my education.
                    <br /><br />
                    Feel free to send me a message for possible collaborations,
                    new connections, or projects contact me at  <a href="mailto:nikkschaefer@gmail.com" className="about-link">nikkschaefer@gmail.com</a>.
                </p>
            </div>
        </div>
    )
}
export default About;