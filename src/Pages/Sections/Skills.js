import React from 'react'
const languages = [
    ['Javascript', 75, 'blue'],
    ['Python', 70, 'green'],
    ['CSharp', 40, 'yellow'],
    ['HTML5', 80, 'white'],
    ['CSS', 80, 'purple']]



const frameworks = [
    ['ReactJS', 75, 'yellow'],
    ['Django', 50, 'red'],
    ['Firebase', 30, 'white'],
    ['React Native', 50, 'purple'],
    ['Unity', 45, 'green'],
]


const Skill = (props) => {
    let ourArray = [];

    function getCircumference(radius) {
        return radius * 2 * Math.PI;
    }
    function getOffset(circumference, percent) {
        return circumference - percent / 100 * circumference
    }

    const circle = {
        radius: '52',
        fillColor: '#292929',
        strokeWidth: '8',
        strokeColor: 'white',
    }
    circle.circumference = getCircumference(circle.radius)


    for (let i = 0; i < props.skills.length; i++) {

        circle.offset = getOffset(circle.circumference, props.skills[i][1]);
        circle.strokeColor = props.skills[i][2];


        ourArray.push(
            <div className='skill-content-div'>
                <div className='svg-div'>
                    <svg
                        class="progress-ring"
                        width="120"
                        height="120">
                        <circle id='circle'
                            class="circles"
                            stroke={circle.strokeColor}
                            stroke-width={circle.strokeWidth}
                            fill={circle.fillColor}
                            r={circle.radius}
                            cx="60"
                            stroke-linecap="round"
                            cy="60"
                            style={{
                                strokeDasharray: `${circle.circumference} ${circle.circumference}`,
                                strokeDashoffset: `${circle.offset}`
                            }} />
                    </svg>
                    <p className='skill-content-percent'>{props.skills[i][1]}%</p>
                </div>
                <p className='skills-label'>{props.skills[i][0]}</p>
            </div>)
    }
    return ourArray
}


const SkillDiv = (props) => {
    return (
        <div className='skills-div'>
            <p className='skill-section-title'>{ props.title }</p>
            <Skill skills={props.skills} />
        </div>

    )
}

const Skills = () => {
    return (
        <div id='skills'>
            <p className='section-title'>Skillset <hr style={{ marginLeft: '5px', width: '60%', color: 'black', verticalAlign: 'middle' }} /></p>
            <SkillDiv skills={languages} title='Languages' />
            <SkillDiv skills={frameworks} title='Frameworks' />
        </div>
    )
}
export default Skills;