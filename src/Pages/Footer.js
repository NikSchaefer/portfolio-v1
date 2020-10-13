import React from 'react';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";


const Footer = () => {

    

    return (
        <div className="footer">
            <footer>
                <div className="footer-div">
                <div className='about-together-div'>
                <p className='about-together-text'>
                    LETS W🚀RK <br />TOGETHER

                </p>
                <p style={{fontSize:'14px'}}>Collaberations, Connections, Projects <br /></p>
                Contact me at <a href="mailto:nikkschaefer@gmail.com" type="text-link">nikkschaefer@gmail.com</a><br />
                
                </div>
               
                <div className="footer-block">
                    <h3>
                        Get In Touch<br />
                    </h3>
                    <p>
                    <br />
                        Reach me at <a href="mailto:nikkschaefer@gmail.com" type="text-link">nikkschaefer@gmail.com</a> <br />
                      <br />
                      © 2020 Design + <a href='https://github.com/NikSchaefer/portfolio' className='home-div-about-link' style={{color:'white', fontSize:'15px', textAlign:"center", textDecorationColor:'white', width:'fit-content'}}>Code</a> by Nik Schaefer
                    </p>
                      </div>
                <div className="footer-block">
                    <h3>Quick Links</h3>
                    <NavLink to="/" className="footer-quick-link" onClick={scroll.scrollToTop}>Work<br /></NavLink>
                    <NavLink to="/about" className="footer-quick-link" onClick={scroll.scrollToTop}>About<br /></NavLink>
                    <a href="https://drive.google.com/file/d/11bnEWOG--7ZIix_RyUJYb9c3cbEjP2X_/view?usp=sharing" className="footer-quick-link" onClick={scroll.scrollToTop}>Resumé<br /></a>
                </div>
                <div className="footer-block">
                    <h3>Connect</h3>
                    <a href="mailto:nikkschaefer@gmail.com" className="footer-quick-link">Email<br /></a>
                    <a href="https://github.com/NikSchaefer" className="footer-quick-link">Github<br /></a>
                    <a href=" " className="footer-quick-link">Discord<br /></a>
                </div>
               

                </div>
            </footer>

        </div>
    )
}

export default Footer;
