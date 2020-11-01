import React from 'react';
import github from './Images/Github2.svg'
import mail from './Images/email.svg'

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
            </header>
        </div>
    )
}

export default NavBar;
