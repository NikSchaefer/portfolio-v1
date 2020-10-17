import React from 'react'
import placeholder from '../Images/placeholder.png'
import { NavLink } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";
const K5 = () => {
    return (
        <div className='work-div'>
        <div className='work-img-div'>
            <img src={placeholder} className='work-img' alt='' />
        </div>
        <div className="home-top-description-div">
        <p className='home-top-description-title'>K5 Gaming</p>
            <p className="home-top-description">
            Creating a new Website with React to fit a growing orginization
            </p>
        </div>
        <p className='gray'>DESIGN / RESEARCH / DEVELOPMENT</p>
        <div className='work-role'>
            <div className='work-role-content'>
                <p className='work-role-title'>My Role</p>
                <p>Design</p>
                <p>Development</p>
                <p>Researcg</p>
            </div>
            <div className='work-role-content'>
                <p className='work-role-title'>Timeline</p>
                <p>September 2020</p>
                <p>to October 2020</p>
            </div>
            <div className='work-role-content'>
                <p className='work-role-title'>Tools</p>
                <p>Wordpress</p>
                <p>Elementor</p>
            </div>
        </div>
        <p className='work-colored' style={{backgroundColor:'#b1e3ff', float:"left", marginLeft:'10%'}}>Intro</p>
        <div className="home-top-description-div" style={{backgroundColor:'#fbfbfd'}}>
        <p className='home-top-description-title'>What is the K5 Gaming</p>
            <p className="home-top-description">
            <a className="home-top-description-link" href='https://k5gaming.vercel.app/'>K5 Gaming</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </p>
        </div>
        <div className="home-div-about">
            <NavLink className='home-div-about-title' to='/'>Work</NavLink>
            <NavLink to='/' className="home-div-about-link" onClick={scroll.scrollToTop}>Back to Work</NavLink>
        </div>
    </div>
    )
}
export default K5;