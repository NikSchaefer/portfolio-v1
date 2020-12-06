import React from 'react'
import Title from './SectionTitle'

type skillArray = (string | number)[][]

interface circleSetting {
    radius: number,
    fillColor: string,
    strokeWidth: string,
    strokeColor: string,
    circumference: number,
    offset: number,
}

const languages: skillArray = [
    ['Javascript', 70, 'purple'],
    ['Python', 75, 'green'],
    ['Typescript', 50, '#05c2c8'],
    ['CSharp', 40, 'yellow'],
    ['HTML', 80, 'white'],
    ['CSS', 80, 'purple'],
]
const frameworks: skillArray = [
    ['ReactJS', 75, 'yellow'],
    ['Django', 70, 'red'],
    ['Firebase', 30, '#05c2c8'],
    ['React Native', 50, 'purple'],
    ['Unity', 45, 'green'],
]
const circleSettings: circleSetting = {
    radius: 52,
    fillColor: '#0e1b25',
    strokeWidth: '6',
    strokeColor: 'white',
    circumference: 0,
    offset: 0,
}
const getCircumference = function (radius: number) {
    return radius * 2 * Math.PI;
}
const getOffset = function (circumference: number, percent: number) {
    return circumference - percent / 100 * circumference
}
circleSettings.circumference = getCircumference(circleSettings.radius)
const Skill = (props: { skills: any }): any => {
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
const SkillDiv = (props: { skills: skillArray }) => {
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