import React from 'react';
import github from '../Images/Github2.svg'
import mail from '../Images/email.svg'

import upArrow from '../Images/upArrow.svg'
import down from '../Images/chevronDown.svg'
function scroll(offset, id) {
    const yOffset = offset;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

export function toAbout() {
    scroll(-200, 'about')
}
export function toTop() {
    window.scrollTo(0, 0)
}
export function toSkills() {
    scroll(-200, 'skills')
}
export function toExp() {
    scroll(-200, 'experience')
}

export function toProjects() {
    scroll(-200, 'projects')
}
export function toBottom() { 
    scroll(0, 'footer')
}

let percent = 0;

window.onscroll = function () {
    const line = document.getElementById('loadline')
    const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);  
    percent = Math.round((window.scrollY) / (limit - window.innerHeight) * 100)
    line.style.background = `linear-gradient(90deg, orange ${percent}%, rgba(255,255,255,1) ${percent}%, rgba(255,255,255,1) 100%)`
    if (window.scrollY > 50) {
        const scrollElement = document.getElementById('scrollAnimation')
        scrollElement.style.animation = 'scrollDownAnimation 2s forwards'
    }
}

const NavBar = () => {
    return (
        <div>
            <header>
                <a className='nav-logo-link' href='https://github.com/NikSchaefer'><img src={github} alt='' className='nav-logo' /></a>
                <div className="nav-links-div">
                    <p className='nav-link' onClick={toTop}>Intro</p>
                    <hr />
                    <p className='nav-link' onClick={toExp}>Experience</p>
                    <hr />
                    <p className='nav-link' onClick={toSkills}>Skills</p>
                    <hr />
                    <p className='nav-link' onClick={toProjects}>Projects</p>
                    <hr />
                    <p className='nav-link' onClick={toAbout}>About</p>
                </div>
                <a href='mailto:nikkschaefer@gmail.com' className='nav-logo-link'><img src={mail} alt='' className='nav-logo' /></a>
                <div style={{flexBasis:'100%'}} /> 
                <div id='loadline' />
            </header>
            <div onClick={toExp} className='scroll-down-div' id='scrollAnimation'>
                <p className='scroll-down-text'>Scroll Down</p>
                <img src={down} alt='' className='scroll-down-img' />
            </div>
            <div className='toTop-div' onClick={toTop}>
                <img src={upArrow} alt='' className='toTop-img' />
            </div>
        </div>
    )
}
export default NavBar;