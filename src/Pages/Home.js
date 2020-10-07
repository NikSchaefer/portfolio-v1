import React from 'react';
import TEC from './Images/TEC.png'
import Nebula from './Images/nebula.png'
import k5red from './Images/k5red.png'
import RB from './Images/ROCKETBEAST_PFP1.png'

const Home = () => {


    return (
        <div className="home-div">
            
            <div className="home-top-description-title">
                <h1>Hi there, I'm Nik.</h1>
                <p className="home-top-description">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit <br /><br />aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam."
                </p>

            </div>


            <h1 className="home-work-title">Selected Work</h1>


            <div class="card" >
                <img src={TEC} className="card-img" alt="" />
                <div class="container">
                    <h4><b>The Esport Company</b></h4>
                    <p>Web Developer Internship<br /></p>
                </div>
                    <p className="home-card-label-div-text-purple">
                        Internship
                    </p>

            </div>


            <div class="card">
                <img src={k5red} alt="" className="card-img" />
                <div class="container">
                    <h4><b>K5 Gaming</b></h4>
                    <p>Official K5 Esports Website</p>
                </div>
                <p className="home-card-label-div-text-blue">
                        Full Stack + Design
                    </p>
            </div>

            <div class="card">
                <img src={Nebula} alt="" className="card-img" />
                <div class="container">
                    <h4><b>Nebula Esports</b></h4>
                    <p>Official Nebula Esports Website</p>
                </div>
                <p className="home-card-label-div-text-orange">
                Full Stack + Design
                    </p>
            </div>

            <div class="card">
                <img src={RB} alt="" className="card-img-blur" />
                <div class="container">
                    <h4><b>RocketBeast</b></h4>
                    <p>Official Rocket Beast Website</p>
                </div>
                <p className="home-card-label-div-text-red">
                        Full Stack + Design
                    </p>
                    
            </div>




        </div>
    )
}

export default Home;