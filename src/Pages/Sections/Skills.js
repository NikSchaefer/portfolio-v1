import React from 'react'
import SkillsOut from '../Components/Skillset'

const skillset = [
    'Javascript(ES6)', 'CSharp', 'Python',
    'HTML5', 'ReactJS', 'CSS',
    'Firebase', 'React Native', 'Unity']

const Skills = () => {
    return (
        <div id='skills'>
            <p className='section-title'>Skillset <hr style={{ marginLeft: '5px', width: '60%', color: 'black', verticalAlign: 'middle' }} /></p>
            <div className='skills-div'>
                <SkillsOut skills={skillset} />
            </div> 
        </div>
    )
}
export default Skills;