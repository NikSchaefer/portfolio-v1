import React from 'react'
const Experience = () => {
    return (
        <div id='experience'>
            <p className="section-title">Experience <hr style={{marginLeft:'5px', width: '60%', color: 'black', verticalAlign: 'middle' }} /></p>

            <div className='exp-container'>
                <div className='exp-options-div'>
                    <div className='exp-options-list'>
                        <p className='exp-option'>Web Developer</p>
                        <p className='exp-option'>Designer</p>
                        <p className='exp-option'>Internship</p>
                        <p className='exp-option'>Project Lead</p>
                    </div>
                </div>
                <div className='exp-content-div'>

                    <div className='exp-content'>
                        <p className='exp-content-title'>@Web Developer Internship</p>
                        <p className='exp-content-sub-title'>Internship | September 2020 - Present</p>
                        <ul>
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Experience;