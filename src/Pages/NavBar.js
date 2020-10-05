import React from 'react';
import {NavLink} from "react-router-dom";


const NavBar = () => {

    return (
        <div>
            <header>
                <h2 className="nav-name">Nik Schaefer</h2>
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