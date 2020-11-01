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

export default SkillsOut;