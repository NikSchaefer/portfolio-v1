import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import Title from '../Components/SectionTitle'

import { ArrowSvg, Chevron, socialSvg } from '../Images/svg'
import { init } from 'emailjs-com'
import { scrollTo } from './NavBar'
const config = {
    KEY: 'user_dkvZZk4wFtUR8WzHQlJGa',
    SERVICE: "service_gvyfwv8",
    TEMPLATE: 'template_0ywu6hn'
}
init(config.KEY);
const SocialBlock = function (props) {
    return (
        <a href={props.link} onClick={function (e) { e.preventDefault(); window.open(props.link) }} className='footer-social-div'>
            {props.image({ class: 'footer-social-img' })}
        </a>
    )
}
export function Socials(props) {
    return (
        <div className='footer-socials-div' style={{ margin: props.margin }}>
            <SocialBlock link='https://github.com/NikSchaefer' image={socialSvg.github} />
            <SocialBlock link='https://www.linkedin.com/in/nik-schaefer/' image={socialSvg.linkedin} />
            <SocialBlock link='mailto: nikkschaefer@gmail.com' image={socialSvg.email} />
        </div>
    )
}
const Footer = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name !== '' && email !== '' && message !== '') {
            emailjs.send(config.SERVICE, config.TEMPLATE, {
                userEmail: email,
                userMessage: message,
                userName: name,
            });
            setName('')
            setEmail('')
            setMessage('')
            alert('Message Sent Sucessfully')
        } else {
            alert('Please fill in all required fields')
        }
    }
    return (
        <footer id='footer'>
            <ArrowSvg height='90' color='white' />
            <Title titleId='title-footer' hr='hr-footer' title='contact' />
            <p style={{ margin: '0', fontSize: '14px', color: 'var(--accent)' }}>Collaberations, Connections, Questions <br /></p>
            <form onSubmit={handleSubmit} className='footer-form'>
                <input onChange={function (e) { setName(e.target.value) }} value={name} placeholder='Name' className='footer-input' />
                <input onChange={function (e) { setEmail(e.target.value) }} value={email} placeholder='Email' className='footer-input' />
                <textarea onChange={function (e) { setMessage(e.target.value) }} value={message} placeholder='Message' className='footer-input' />
                <button className='intro-button' type='submit'>Submit</button>
            </form>
            <div className='footer-to-top-div'>
                <div onClick={scrollTo.top} className='footer-socials-div' >
                    <Chevron style={{ backgroundColor: 'var(--accent)', transform: 'rotate(180deg)' }} color='white' height='40' class='footer-social-div' />
                </div>
            </div>
            <div className='footer-bottom'>
                <Socials />
                <p className='footer-copyright'>© 2020 Design + <a href='https://github.com/NikSchaefer/portfolio' className='footer-code-link'>Code</a> by Nik Schaefer</p>
            </div>
        </footer>
    )
}
export default Footer;