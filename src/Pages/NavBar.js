import React from 'react';
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Menu from './Images/Menu.svg'

const NavBar = () => {

    let b = true;
    function destroy() {

        let a = document.getElementById('nav-menu-div');
        if (b) {
            a.style.display = 'none';
            b = false;
        }
        if (a.style.display === 'none') {
            a.style.display = 'flex'
        } else {
            a.style.display = 'none';
        }
        scroll.scrollToTop();
    }


    return (
        <div>
            <div style={{ backgroundColor: 'burlywood', padding: '1px' }}>
                <p style={{ fontSize: '20px' }}>This site is currently under development not all features may work</p>
            </div>
            <header>
                <a href="https://nikschaefer.vercel.app/" className="nav-name">Nik Schaefer</a>
                <div className="nav-links-div">
                    <NavLink to="/" className="nav-link" exact activeStyle={{ color: 'blue' }} onClick={scroll.scrollToTop}>Work</NavLink>
                    <NavLink to="/about" className="nav-link" exact activeStyle={{ color: 'blue' }} onClick={scroll.scrollToTop}>About</NavLink>
                    <a href="https://drive.google.com/file/d/11bnEWOG--7ZIix_RyUJYb9c3cbEjP2X_/view?usp=sharing" className="nav-link" exact activeStyle={{ borderBottom: 'solid', borderColor: 'lightblue' }} onClick={scroll.scrollToTop}>Resumé</a>
                </div>

                <img src={Menu} alt="" onClick={destroy} className='nav-menu' />

            </header>
            <div id="nav-menu-div">
                <NavLink to="/" className="nav-link-menu" onClick={destroy}>Work</NavLink>
                <NavLink to="/about" className="nav-link-menu" onClick={destroy}>About</NavLink>
                <a href="https://drive.google.com/file/d/11bnEWOG--7ZIix_RyUJYb9c3cbEjP2X_/view?usp=sharing" className="nav-link-menu" exact activeStyle={{ borderBottom: 'solid', borderColor: 'lightblue' }} onClick={scroll.scrollToTop}>Resumé</a>
            </div>
        </div>
    )
}

export default NavBar;
