import React from 'react'
import placeholder from '../Images/placeholder.png'
import { NavLink } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";
const TEC = () => {
    return (
        <div className='work-div'>
            <div className='work-img-div'>
                <img src={placeholder} className='work-img' alt='' />
            </div>
            <div className="home-top-description-div">
                <p className='home-top-description-title'>The Esport Company</p>
                <p className="home-top-description">
                    Revamping the current TEC website to fit a growing buinsess
                </p>
            </div>
            <p className='gray'>WEB DESIGN / UX / DEVELOPMENT</p>
            <div className='work-role'>
                <div className='work-role-content'>
                    <p className='work-role-title'>My Role</p>
                    <p>Design</p>
                    <p>Development</p>
                </div>
                <div className='work-role-content'>
                    <p className='work-role-title'>Timeline</p>
                    <p>September 2020</p>
                    <p>to Current</p>
                </div>
                <div className='work-role-content'>
                    <p className='work-role-title'>Tools</p>
                    <p>Wordpress</p>
                    <p>Elementor</p>
                </div>
                <div className='work-role-content'>
                    <p className='work-role-title'>Code</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                </div>
            </div>
            <p className='work-colored' style={{ backgroundColor: '#b1e3ff', float: "left", marginLeft: '10%' }}>Intro</p>
            <div className="home-top-description-div" style={{ backgroundColor: '#fbfbfd' }}>
                <p className='home-top-description-title'>What is the Esport Company?</p>
                <p className="home-top-description">
                    <a className="home-top-description-link" href='https://www.theesportcompany.com/'>The Esport Company</a> provides High Schools, Universities ,and Amatuers the tools and resources to build their programs from the beginning! We offer services, leagues, and curriculum tailored to each level of our client needs.
                </p>
            </div>
            <div className="home-div-about">
                <NavLink className='home-div-about-title' to='/'>Work</NavLink>
                <NavLink to='/' className="home-div-about-link" onClick={scroll.scrollToTop}>Back to Work</NavLink>
            </div>
        </div>
    )
}
export default TEC;