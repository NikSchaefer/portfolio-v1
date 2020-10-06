import React from 'react';
import {NavLink} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NavBar = () => {

    
    

    return (
        <div>
            <header>
                <a href="http://localhost:3000/" className="nav-name">Nik Schaefer</a>
                <div className="nav-links-div">
                    <NavLink to="/" className="nav-link" onClick={scroll.scrollToTop}>Work</NavLink>
                    <NavLink to="/about" className="nav-link" onClick={scroll.scrollToTop}>About</NavLink>
                    <NavLink to="/resume" className="nav-link" onClick={scroll.scrollToTop}>Resumé</NavLink>

                </div>

            </header>

        </div>
    )
}

export default NavBar;