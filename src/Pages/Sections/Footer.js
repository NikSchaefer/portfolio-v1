import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import github from '../Images/github.svg'
import mail from '../Images/email.svg'
import Title from '../Components/SectionTitle'

import { init } from 'emailjs-com';
const config = {
    KEY: 'user_dkvZZk4wFtUR8WzHQlJGa',
    SERVICE: "service_gvyfwv8",
    TEMPLATE: 'template_0ywu6hn'
}
init(config.KEY);

export const ArrowSvg = function (props) {
    return (
        <svg preserveAspectRatio="none" id={props.id}
            style={{ marginBottom: props.margin }}
            viewBox="0 0 100 102" height={props.height}
            width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L50 100 L100 0 Z" fill={props.color} stroke={props.color}></path>
        </svg>
    )
}
const SocialBlock = function (props) {
    return (
        <a href={props.link} className='footer-social-div'>
            <img src={props.image} className='footer-social-img' alt='' />
        </a>
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
            <Title title='contact' />
            <p style={{ margin: '0', fontSize: '14px', color: 'var(--accent)' }}>Collaberations, Connections, Questions <br /></p>
            <form onSubmit={handleSubmit} className='footer-form'>
                <input onChange={function (e) { setName(e.target.value) }} value={name} placeholder='Name' className='footer-input' />
                <input onChange={function (e) { setEmail(e.target.value) }} value={email} placeholder='Email' className='footer-input' />
                <textarea onChange={function (e) { setMessage(e.target.value) }} value={message} placeholder='Message' className='footer-input' />
                <button className='intro-button' type='submit'>Submit</button>
            </form>
            <div className='footer-bottom'>
                <div className='footer-socials-div'>
                    <SocialBlock link='https://github.com/NikSchaefer' image={github} />
                    <SocialBlock link='mailto:nikkschaefer@gmail.com' image={mail} />
                </div>
                <p className='footer-copyright'>© 2020 Design + <a href='https://github.com/NikSchaefer/portfolio' className='footer-code-link'>Code</a> by Nik Schaefer</p>
            </div>
        </footer>
    )
}
export default Footer;
