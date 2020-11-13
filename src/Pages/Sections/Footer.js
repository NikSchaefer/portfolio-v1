import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { init } from 'emailjs-com';
const config = {
    KEY: 'user_dkvZZk4wFtUR8WzHQlJGa',
    SERVICE: "service_gvyfwv8",
    TEMPLATE: 'template_0ywu6hn'
}
init(config.KEY);

// eslint-disable-next-line no-useless-escape
const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateEmail(email) {
    return re.test(email)
}

const Footer = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const messageSent = () => {
        setName('')
        setEmail('')
        setMessage('')
        alert('Message Sent Sucessfully')
    }

    const inValid = () => {
        alert('Please fill in all required fields')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(email) && name !== '' && message !== '' && email !== '') {
            emailjs.send(config.SERVICE, config.TEMPLATE, {
                userEmail: email,
                userMessage: message,
                userName: name,
            });
            messageSent()
        } else {
            inValid()
        }
    }
    return (
        <div>
            <footer id='footer'>
                <p className='footer-main-text'>
                    LETS W<span role='img' aria-label='rocket'>🚀</span>RK <br />TOGETHER
                    </p>
                <p style={{ fontSize: '14px' }}>Collaberations, Connections, Projects <br /></p>
                    Contact me at <a href="mailto:nikkschaefer@gmail.com" type="text-link">nikkschaefer@gmail.com</a><br />

                <form onSubmit={handleSubmit} className='footer-form'>
                    <input onChange={function (e) { setName(e.target.value) }} value={name} placeholder='Name' className='footer-input' />

                    <input onChange={function (e) { setEmail(e.target.value) }} value={email} placeholder='Email' className='footer-input' />

                    <textarea onChange={function (e) { setMessage(e.target.value) }} value={message} placeholder='Message' className='footer-input' />


                    <button type='submit'>Submit</button>
                </form>




                <p>

                    <br />
                      © 2020 Design + <a href='https://github.com/NikSchaefer/portfolio' className='footer-code-link'>Code</a> by Nik Schaefer
                    </p>
            </footer>
        </div>
    )
}

export default Footer;
