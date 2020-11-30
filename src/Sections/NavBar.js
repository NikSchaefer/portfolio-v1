import React from 'react';
import { Chevron } from '../Images/svg'
const scroll = function (offset, id) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
const offset = -500;
function toAbout() {
    scroll(offset, 'about')
}
function toSkills() {
    scroll(offset, 'skills')
}
function toExp() {
    scroll(offset, 'exp-div')
}
function toProjects() {
    scroll(offset, 'projects')
}
function toBottom() {
    scroll(0, 'footer')
}
function toTop() {
    window.scrollTo(0, 0)
}
export const scrollTo = {
    top: toTop,
    skills: toSkills,
    about: toAbout,
    experience: toExp,
    footer: toBottom,
    projects: toProjects,
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
export default function NavBar() {
    return (
        <header>
            <div className="nav-links-div">
                <p className='nav-link' onClick={scrollTo.about}>About</p>
                <p className='nav-link' onClick={scrollTo.experience}>Experience</p>
                <p className='nav-link' onClick={scrollTo.skills}>Skills</p>
                <p className='nav-link' onClick={scrollTo.projects}>Projects</p>
                <p className='nav-link' onClick={scrollTo.footer}>Contact</p>
            </div>
            <div id='loadline' />
            <div className='scroll-down-div' id='scrollAnimation'>
                <Chevron color='var(--accent)' class='scroll-down-img' />
            </div>
        </header>
    )
}