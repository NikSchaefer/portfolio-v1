import React from 'react'
const Title = (props) => {
    return (
        <div>
            <p id={props.titleId} className='section-title'>{props.title}</p>
            <hr id={props.hr} className='section-hr' />
        </div>
    )
}
export default Title;