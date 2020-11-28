import React from 'react';
import down from '../Images/chevronDown.svg'
const scroll = function (offset, id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

const offset = -500;
export function toAbout() {
    scroll(offset, 'about')
}
export function toSkills() {
    scroll(offset, 'skills')
}
export function toExp() {
    scroll(offset, 'experience')
}
export function toProjects() {
    scroll(offset, 'projects')
}
export function toBottom() {
    scroll(0, 'footer')
}
export function toTop() {
    window.scrollTo(0, 0)
}

let percent = 0;
export function checkScrollDown() {
    const line = document.getElementById('loadline')
    const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    percent = Math.round((window.scrollY) / (limit - window.innerHeight) * 100)
    line.style.background = `linear-gradient(90deg, var(--accent) ${percent}%, transparent ${percent}%, transparent 100%)`
    if (window.scrollY > 50) {
        const scrollElement = document.getElementById('scrollAnimation')
        scrollElement.style.display = 'none'
    }
}
const NavBar = () => {
    return (
        <header>
            <div className="nav-links-div">
                <p className='nav-link' onClick={toAbout}>About</p>
                <p className='nav-link' onClick={toExp}>Experience</p>
                <p className='nav-link' onClick={toSkills}>Skills</p>
                <p className='nav-link' onClick={toProjects}>Projects</p>
                <p className='nav-link' onClick={toBottom}>Contact</p>
            </div>
            <div id='loadline' />
            <div className='scroll-down-div' id='scrollAnimation'>
                <img src={down} alt='' className='scroll-down-img' />
            </div>
        </header>
    )
}
export default NavBar;