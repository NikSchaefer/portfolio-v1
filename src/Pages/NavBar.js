import React from 'react';

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

            </header>
        </div>
    )
}

export default NavBar;
