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
            
            <div className="home-top-description-div">
                <p className='home-top-description-title'>Hi there, I'm Nik.</p>
                <p className="home-top-description">
                    I am a full stack developer and UI/UX designer located in Minnesota, US. 
                    I like to contribute to open source projects and I am currently interning for <a className="home-top-description-link" href='https://www.theesportcompany.com/'>The Esport Company</a>.

                     <br /><br />
                    Feel free to send me a message for possible collaborations, 
                    new connections, or projects at  <a href="mailto:nikkschaefer@gmail.com" className="home-top-description-link">nikkschaefer@gmail.com</a>.
                    I should get back to you within 24 hours.
                </p>
                <NavLink to='/about' style={{textAlign:'center', fontSize:17}} className="home-div-about-link" onClick={scroll.scrollToTop}>Learn more about me</NavLink>


            </div>
            

            <div className='card-div'>

            <p className="home-work-title">Selected Work</p>

            <div class="card" >
                <img src={TEC} className="card-img" alt="" />
                <div class="container">
                    <h4><b>The Esport Company</b></h4>
                    <p>Revamping the current website to fit to a growing buisness<br /></p>
                </div>
                    <p className="home-card-label-div-text-purple">
                        Internship
                    </p>

            </div>

            <div class="card">
                <img src={k5red} alt="" className="card-img" />
                <div class="container">
                    <h4><b>K5 Gaming</b></h4>
                    <p>Creating a new Website with React to fit a growing orginization</p>
                </div>
                <p className="home-card-label-div-text-blue">
                        Full Stack + Design
                    </p>
            </div>

            <div class="card">
                <img src={Nebula} alt="" className="card-img" />
                <div class="container">
                    <h4><b>Nebula Esports</b></h4>
                    <p>Full stack + Desgin working as a Project Lead</p>
                </div>
                <p className="home-card-label-div-text-orange">
                Full Stack + Design
                    </p>
            </div>

            <div class="card">
                <img src={RB} alt="" className="card-img-blur" />
                <div class="container">
                    <h4><b>RocketBeast</b></h4>
                    <p>Coming Soon
                    <br />
                    <br />
                    </p>
                </div>
                <p className="home-card-label-div-text-red">
                        Full Stack + Design
                    </p>
                    
                    
            </div>
            </div>
            <div className="home-div-about">
            
                <NavLink className='home-div-about-title' to='/about'>About</NavLink>
                <NavLink to='/about' className="home-div-about-link" onClick={scroll.scrollToTop}>Learn more about me</NavLink>
            </div>
            
        </div>
    )
}

export default Home;
