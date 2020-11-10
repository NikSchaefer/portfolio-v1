import React from 'react'

const Title = (props) => {
    return (
        <div className='section-title-div'>
            <p className='section-title'>{props.title} </p>
            <hr className='section-hr' />
        </div>
    )
}

export default Title;