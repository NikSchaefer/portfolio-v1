import React from 'react'
import Title from './SectionTitle'
const languages = [
    ['Javascript', 70, 'purple'],
    ['Python', 75, 'green'],
    ['Typescript', 50, '#05c2c8'],
    ['CSharp', 40, 'yellow'],
    ['HTML', 80, 'white'],
    ['CSS', 80, 'purple'],
]
const frameworks = [
    ['ReactJS', 75, 'yellow'],
    ['Django', 50, 'red'],
    ['Firebase', 30, '#05c2c8'],
    ['React Native', 50, 'purple'],
    ['Unity', 45, 'green'],
]
const circleSettings = {
    radius: '52',
    fillColor: '#0e1b25',
    strokeWidth: '6',
    strokeColor: 'white',
}
const getCircumference = function (radius) {
    return radius * 2 * Math.PI;
}
const getOffset = function (circumference, percent) {
    return circumference - percent / 100 * circumference
}
circleSettings.circumference = getCircumference(circleSettings.radius)
const Skill = (props) => {
    let outArray = [];
    for (let i = 0; i < props.skills.length; i++) {
        circleSettings.offset = getOffset(circleSettings.circumference, props.skills[i][1]);
        circleSettings.strokeColor = props.skills[i][2];
        outArray.push(
            <div className='skill-content-div' key={`skill-content-div-${i}`}>
                <div className='svg-div'>
                    <svg
                        className="progress-ring"
                        width="120"
                        height="120">
                        <circle id='circle'
                            className="circles"
                            stroke={circleSettings.strokeColor}
                            strokeWidth={circleSettings.strokeWidth}
                            fill={circleSettings.fillColor}
                            r={circleSettings.radius}
                            cx="60"
                            strokeLinecap="round"
                            cy="60"
                            style={{
                                strokeDasharray: `${circleSettings.circumference} ${circleSettings.circumference}`,
                                strokeDashoffset: `${circleSettings.offset}`
                            }} />
                    </svg>
                    <p className='skill-content-percent'>{props.skills[i][1]}%</p>
                </div>
                <p className='skills-label'>{props.skills[i][0]}</p>
            </div>)
    }
    return outArray
}
const SkillDiv = (props) => {
    return (
        <div className='skills-div'>
            <Skill skills={props.skills} />
        </div>
    )
}
const Skills = () => {
    return (
        <div>
            <Title titleId='title-skill' hr='hr-skill' title='Skills ' />
            <div id='skills'>
                <SkillDiv skills={languages} />
                <SkillDiv skills={frameworks} />
            </div>
        </div>
    )
}
export default Skills;