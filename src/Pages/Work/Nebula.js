import React from 'react'
import placeholder from '../Images/placeholder.png'
import { NavLink } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";
const Nebula = () => {
    return (
        <div className='work-div'>
            <div className='work-img-div'>
                <img src={placeholder} className='work-img' alt='' />
            </div>
            <div className="home-top-description-div">
            <p className='home-top-description-title'>Nebula Esports</p>
                <p className="home-top-description">
                Full stack + Design working as a Project Lead
                </p>
            </div>
            <p className='gray'>WEB DESIGN / MANAGEMENT / DEVELOPMENT</p>
            <div className='work-role'>
                <div className='work-role-content'>
                    <p className='work-role-title'>My Role</p>
                    <p>Design</p>
                    <p>Development</p>
                    <p>Research</p>
                </div>
                <div className='work-role-content'>
                    <p className='work-role-title'>Timeline</p>
                    <p>September 2020</p>
                    <p>to October 2020</p>
                </div>
                <div className='work-role-content'>
                    <p className='work-role-title'>Tools</p>
                    <p>ReactJS</p>
                    <p>VSCode</p>
                    <p>Github</p>
                </div>
            </div>
            <p className='work-colored' style={{backgroundColor:'#b1e3ff', float:"left", marginLeft:'10%'}}>Intro</p>
            <div className="home-top-description-div" style={{backgroundColor:'#fbfbfd'}}>
            <p className='home-top-description-title'>What is Nebula Esports</p>
                <p className="home-top-description">
                <a className="home-top-description-link" href='https://nebulaesports.vercel.app/'>Nebula Esports</a> is an Esports Organization since March 2020 looking to expand to be the best in the world. With over 700 members Nebula Esports plans to expand into many different games in the Esports scene.</p>
            </div>
            <div className="home-div-about">
            <NavLink className='home-div-about-title' to='/'>Work</NavLink>
            <NavLink to='/' className="home-div-about-link" onClick={scroll.scrollToTop}>Back to Work</NavLink>
        </div>
        </div>
    )
}
export default Nebula;