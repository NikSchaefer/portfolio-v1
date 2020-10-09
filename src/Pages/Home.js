import React from 'react';
import TEC from './Images/TEC.png'
import Nebula from './Images/nebula.png'
import k5red from './Images/k5red.png'
import RB from './Images/ROCKETBEAST_PFP1.png'
import { NavLink } from 'react-router-dom';

import { animateScroll as scroll } from "react-scroll";

const Home = () => {


    return (
        <div className="home-div">
            
            <div className="home-top-description-title">
                <h1>Hi there, I'm Nik.</h1>
                <p className="home-top-description">
                    I'm a Full Stack Web Developer and UX/UI Designer
                    focused on making an optimal user-experience across my sites.
                    Currently I am at self-taught developer working at <a className="home-top-description-link" href='https://www.theesportcompany.com/'>The Esport Company</a>.
                    <br /><br />
                    Recently, I was a project lead at <a className="home-top-description-link" href='https://nebulaesports.vercel.app/'>Nebula Esports</a> and have previously
                    designed products at <a className="home-top-description-link" href='https://k5gaming.vercel.app/'>K5 Gaming</a> and am currently
                    designing for <a className="home-top-description-link" href=' '>RocketBeast</a> and <a className="home-top-description-link" href='https://www.theesportcompany.com/'>The Esport Company</a>.
                    <br /><br />
                    Feel free to send me a message for possible collaborations, 
                    new connections, or projects at  <a href="mailto:nikkschaefer@gmail.com" className="home-top-description-link">nikkschaefer@gmail.com</a>.
                    I should get back to you within 24 hours.
                </p>

            </div>


            <h1 className="home-work-title">Selected Work</h1>

            <div class="card" >
                <img src={TEC} className="card-img" alt="" />
                <div class="container">
                    <h4><b>The Esport Company</b></h4>
                    <p>Web Developer Internship<br /></p>
                </div>
                    <p className="home-card-label-div-text-purple">
                        Internship
                    </p>

            </div>

            <div class="card">
                <img src={k5red} alt="" className="card-img" />
                <div class="container">
                    <h4><b>K5 Gaming</b></h4>
                    <p>Official K5 Esports Website</p>
                </div>
                <p className="home-card-label-div-text-blue">
                        Full Stack + Design
                    </p>
            </div>

            <div class="card">
                <img src={Nebula} alt="" className="card-img" />
                <div class="container">
                    <h4><b>Nebula Esports</b></h4>
                    <p>Official Nebula Esports Website</p>
                </div>
                <p className="home-card-label-div-text-orange">
                Full Stack + Design
                    </p>
            </div>

            <div class="card">
                <img src={RB} alt="" className="card-img-blur" />
                <div class="container">
                    <h4><b>RocketBeast</b></h4>
                    <p>Official Rocket Beast Website</p>
                </div>
                <p className="home-card-label-div-text-red">
                        Full Stack + Design
                    </p>
                    
            </div>
            <div className="home-div-about">
            
                <NavLink className='home-div-about-title' to='/about'>About</NavLink>
                <NavLink to='/about' className="home-div-about-link" onClick={scroll.scrollToTop}>Learn more about me</NavLink>
            </div>
            
        </div>
    )
}

export default Home;