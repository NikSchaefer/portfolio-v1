import React from 'react';
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
export function checkScrollDown() {
    const line = document.getElementById('loadline')
    const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    percent = Math.round((window.scrollY) / (limit - window.innerHeight) * 100)
    line.style.background = `linear-gradient(90deg, var(--accent) ${percent}%, transparent ${percent}%, transparent 100%)`
    if (window.scrollY > 50) {
        const scrollElement = document.getElementById('scrollAnimation')
        scrollElement.style.animation = 'scrollDownAnimation 2s forwards'
    }
}

const NavBar = () => {
    return (
        <div>
            <header>
                <div className="nav-links-div">
                    <p className='nav-link' onClick={toAbout}>About</p>
                    <p className='nav-link' onClick={toExp}>Experience</p>
                    <p className='nav-link' onClick={toSkills}>Skills</p>
                    <p className='nav-link' onClick={toProjects}>Projects</p>
                    <p className='nav-link' onClick={toBottom}>Contact</p>
                </div>
                <div style={{ flexBasis: '100%' }} />
                <div id='loadline' />
            </header>
            <div className='scroll-down-div' id='scrollAnimation'>
                <img src={down} alt='' className='scroll-down-img' />
            </div>
        </div>
    )
}
export default NavBar;