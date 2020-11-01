import React from 'react'
const Experience = () => {
    function handle(id) {
        const all = document.getElementsByClassName('exp-option');
        for (var i = 0; i < all.length; i++) {
            all[i].style.backgroundColor = 'transparent'
        }
        const change = document.getElementById(id + '-selector');
        change.style.backgroundColor = 'rgb(255, 194, 0)';

        const allContent = document.getElementsByClassName('exp-content-div')
        for (var j = 0; j < allContent.length; j++) {
            allContent[j].style.display = 'none'
        }
        const changeContent = document.getElementById(id)
        changeContent.style.display = 'block'
    }
    window.onload = function () {
        const selector = document.getElementsByClassName('exp-option')
        selector[0].style.backgroundColor = 'rgb(255, 194, 0)'

        const content = document.getElementsByClassName('exp-content-div')
        content[0].style.display = 'block'
    }
    return (
        <div id='experience'>
            <p className="section-title">Experience <hr style={{ marginLeft: '5px', width: '60%', color: 'black', verticalAlign: 'middle' }} /></p>

            <div className='exp-container' id=''>
                <div className='exp-options-div'>
                    <div className='exp-options-list'>
                        <p className='exp-option' id='Spiral-selector' onClick={() => handle('Spiral')}>Spiral Esports</p>
                        <p className='exp-option' id='Sparks-selector' onClick={() => handle('Sparks')}>Sparks VB Club</p>
                        <p className='exp-option' id='TEC-selector' onClick={() => handle('TEC')}>The Esport Company</p>
                        <p className='exp-option' id='K5-selector' onClick={() => handle('K5')}>K5 Gaming</p>
                        <p className='exp-option' id='Nebula-selector' onClick={() => handle('Nebula')}>Nebula Esports</p>
                    </div>
                </div>

                <div className='exp-content-div' id='Spiral'>
                    <div className='exp-content'>
                        <p className='exp-content-title'>@Spiral Esports</p>
                        <p className='exp-content-sub-title'>Development | Sep 2020 - Nov 2020</p>
                        <ul>
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <p className='exp-skill'>#React</p>
                            <p className='exp-skill'>#HTML</p>
                            <p className='exp-skill'>#CSS</p>
                            <p className='exp-skill'>#Javascript</p>
                            <p className='exp-skill'>#Vercel</p>
                        </ul>
                    </div>
                </div>

                <div className='exp-content-div' id='Sparks'>
                    <div className='exp-content'>
                        <p className='exp-content-title'>@Sparks Volleyball Club</p>
                        <p className='exp-content-sub-title'>Development | Sep 2020 - Present</p>
                        <ul>
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <p className='exp-skill'>#React</p>
                            <p className='exp-skill'>#HTML</p>
                            <p className='exp-skill'>#CSS</p>
                            <p className='exp-skill'>#Javascript</p>
                            <p className='exp-skill'>#Vercel</p>
                        </ul>
                    </div>
                </div>

                <div className='exp-content-div' id='TEC'>
                    <div className='exp-content'>
                        <p className='exp-content-title'>@The Esport Company</p>
                        <p className='exp-content-sub-title'>Internship | Sep 2020 - Present</p>
                        <ul>
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <p className='exp-skill'>#Wordpress</p>
                            <p className='exp-skill'>#Elementor</p>
                            <p className='exp-skill'>#CSS</p>
                        </ul>
                    </div>
                </div>

                <div className='exp-content-div' id='K5'>
                    <div className='exp-content'>
                        <p className='exp-content-title'>@K5 Gaming</p>
                        <p className='exp-content-sub-title'>Development | Sep 2020 - Nov 2020</p>
                        <ul>
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <p className='exp-skill'>#React</p>
                            <p className='exp-skill'>#HTML</p>
                            <p className='exp-skill'>#CSS</p>
                            <p className='exp-skill'>#Javascript</p>
                            <p className='exp-skill'>#Vercel</p>
                        </ul>
                    </div>
                </div>

                <div className='exp-content-div' id='Nebula'>
                    <div className='exp-content'>
                        <p className='exp-content-title'>@Nebula Esports</p>
                        <p className='exp-content-sub-title'>Internship | Sep 2020 - Nov 2020</p>
                        <ul>
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <li>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
                            <br />
                            <p className='exp-skill'>#React</p>
                            <p className='exp-skill'>#HTML</p>
                            <p className='exp-skill'>#CSS</p>
                            <p className='exp-skill'>#Javascript</p>
                            <p className='exp-skill'>#Vercel</p>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Experience;