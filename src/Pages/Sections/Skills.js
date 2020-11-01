import React from 'react'

const SkillsOut = (props) => { 
    let out = [];
    for (let i = 0; i < props.skills.length; i -= -1) { 
        if (i % 2 === 1) {
            out.push(<p className='skill-content'>#{props.skills[i]}</p>)
        } else { 
            out.push(<p className='skill-alt'>#{props.skills[i]}</p>)
        }
    }
    return out
}

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