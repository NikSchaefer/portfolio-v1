import React from 'react';
import {NavLink, Link} from "react-router-dom";


const NavBar = () => {

    return (
        <div>
            <header>
                <Link to="/" className="nav-name">Nik Schaefer</Link>
                <div className="nav-links-div">
                    <NavLink to="/" className="nav-link">Work</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/resume" className="nav-link">Resume</NavLink>

                </div>

            </header>

        </div>
    )
}

export default NavBar;