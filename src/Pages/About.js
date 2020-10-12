import React from 'react';

import { animateScroll as scroll } from "react-scroll";




const About = () => {

    
    return (
    <div>
         <div className="home-top-description-div">
                <p className='home-top-description-title'>Hello Again.</p>
                <p className="home-top-description">

                    I'm a Full Stack Web Developer and UX/UI Designer
                    focused on making an optimal user-experience across my sites.
                    Currently I am at self-taught developer working at <a className="home-top-description-link" href='https://www.theesportcompany.com/'>The Esport Company</a>.
                    <br /><br />
                    Recently, I was a project lead at <a className="home-top-description-link" href='https://nebulaesports.vercel.app/'>Nebula Esports</a>.
                    I have previously
                    designed products at <a className="home-top-description-link" href='https://k5gaming.vercel.app/'>K5 Gaming</a> and am currently
                    designing for <a className="home-top-description-link" href=' '>RocketBeast</a> and <a className="home-top-description-link" href='https://www.theesportcompany.com/'>The Esport Company</a>.
                    <br /><br />
                    Feel free to send me a message for possible collaborations, 
                    new connections, or projects at  <a href="mailto:nikkschaefer@gmail.com" className="home-top-description-link">nikkschaefer@gmail.com</a>.
                    I should get back to you within 24 hours.
                 </p>
            </div>
            <div className='about-skillset-div'>
                <p className='home-work-title'>Skillset</p>

                <p className="about-skillset-description">
                    <b>Main Craft</b><br /><br /><br />
                    Product Design <br />
                    <br />
                    Interaction Design <br />
                    <br />
                    Management <br />
                    <br />
                </p>
                <p className="about-skillset-description">
                <b>Soft Skills</b><br /><br /><br />
                    Communication <br />
                    <br />
                    Self-awareness <br />
                    <br />
                    Listening <br />
                    <br />
                    Adaptability <br />
                    <br />
                    Self-regulation <br />
                </p>
                <p className="about-skillset-description">
                <b>Code</b><br /><br /><br />
                    CSS <br />
                    <br />
                    HTML <br />
                    <br />
                    Javascript <br />
                    <br />
                    Python <br />
                    <br />
                    C# <br />
                    <br />
                    JSX <br />
                </p>
                <p className="about-skillset-description">
                <b>Development</b><br /><br /><br />
                    React <br />
                    <br />
                    Flask <br />
                    <br />
                    Unity <br />
                    <br />
                    Nodejs <br />
                    <br />
                    VSCode/Git <br />
                    <br />
                </p>
            </div>
            <div className="home-div-about">
            
            <a className='home-div-about-title' href='https://drive.google.com/file/d/11bnEWOG--7ZIix_RyUJYb9c3cbEjP2X_/view?usp=sharing'>Resumé</a>
            <a href='https://drive.google.com/file/d/11bnEWOG--7ZIix_RyUJYb9c3cbEjP2X_/view?usp=sharing' className="home-div-about-link" onClick={scroll.scrollToTop}>Download Resumé</a>
        </div>
    </div>
    )
}
export default About;