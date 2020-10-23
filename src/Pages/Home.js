import React from 'react';
import TEC from './Images/TEC.png'
import Nebula from './Images/nebula.png'
import k5red from './Images/k5red.png'
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import copy from './Images/Copy.svg'





const Home = () => {
    return (
        <div className="home-div">
            <div className="home-top-description-div">
                <p className='home-top-description-title'>Hi there, I'm Nik.</p>
                <p className="home-top-description">
                    I am a self-taught full-stack developer and a student located in Minnesota, US. 
                    I am currently interning for <a className="home-top-description-link" href='https://www.theesportcompany.com/'>The Esport Company</a>.
                     <br /><br />
                    Feel free to send me a message for possible collaborations, 
                    new connections, or projects at  <a href="mailto:nikkschaefer@gmail.com" className="home-top-description-link">nikkschaefer@gmail.com<img className='copy' src={copy} /></a>.
                    I should get back to you within 24 hours.
                </p>
                <NavLink to='/about' style={{textAlign:'center', fontSize:17}} className="home-div-about-link" onClick={scroll.scrollToTop}>Learn more about me</NavLink>
            </div>
            <div className='card-div'>
            <p className="home-work-title">Selected Work</p>
            <NavLink to='/theesportcompany' style={{ textDecoration:'none'}} onClick={scroll.scrollToTop}>
            <div class="card" >
                <img src={TEC} className="card-img" alt="" />
                <div class="container">
                    <p className='gray'>WEB DESIGN / UX / DEVELOPMENT</p>
                    <h4 style={{fontSize:'30px'}}><b>The Esport Company</b></h4>
                    <p>Revamping the current website to fit to a growing buisness<br /></p>
                    <p className="home-card-label-div-text-blue" style={{backgroundColor:'#ccccfa'}}>
                        Internship
                    </p>
                </div>
            </div>
            </NavLink>
            <NavLink to='/nebula' style={{  textDecoration:'none'}} onClick={scroll.scrollToTop}>
            <div class="card">
                <img src={Nebula} alt="" className="card-img" />
                <div class="container">
                    <p className='gray'>WEB DESIGN / MANAGEMENT / DEVELOPMENT</p>
                    <h4><b>Nebula Esports</b></h4>
                    <p>Full stack + Design working as a Project Lead</p>
                    <p className="home-card-label-div-text-blue" style={{backgroundColor:'#fed674'}}>
                        Development + Design
                    </p>
                </div>
            </div>
            </NavLink>
            <NavLink to='/k5gaming' style={{  textDecoration:'none'}} onClick={scroll.scrollToTop}>
            <div class="card">
                <img src={k5red} alt="" className="card-img" />
                <div class="container">
                    <p className='gray'>DESIGN / RESEARCH / DEVELOPMENT</p>
                    <h4><b>K5 Gaming</b></h4>
                    <p>Creating a new Website with React to fit a growing orginization</p>
                    <p className="home-card-label-div-text-blue" style={{backgroundColor:'#b1e3ff'}}>
                    Development + Design
                    </p>
                </div>
            </div>
            </NavLink>
            </div>
            <div className="home-div-about">
                <NavLink className='home-div-about-title' to='/about'>About</NavLink>
                <NavLink to='/about' className="home-div-about-link" onClick={scroll.scrollToTop}>Learn more about me</NavLink>
            </div>
        </div>
    )
}
export default Home;