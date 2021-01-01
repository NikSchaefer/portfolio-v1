import Title from './SectionTitle'
import { scrollTo } from '../Sections/NavBar'
export default function About() {
    return (
        <div className='about-primary' >
            <Title titleId='title-about' hr='hr-about' title='About Me' />
            <div className='about-div' id='about'>
                <p className='about-text'>
                    <span role='img' aria-label='wave'>👋</span><br /><br />
                    I'm self-taught full-stack developer and hobbyist programmer student
                    based in Minnesota, US <br /><br />
                    I have taken on roles of design, research and development.<br />
                    In my free time I like to contribute to open source projects, build my own projects, and further my education.
                    <br /><br />
                    Feel free to send me a message for possible collaborations,
                    new connections, or projects contact me at  <a href="mailto:nikkschaefer@gmail.com">nikkschaefer@gmail.com</a>.
                </p>
                <p onClick={scrollTo.footer} className='button-dark'>Say Hello</p>
            </div>
        </div>
    )
}