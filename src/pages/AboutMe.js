import React from 'react';
import Portrait from '../utils/imgs/portrait.jpg'

import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id='about' style={{ height: '100vh', backgroundColor: 'green' }}>
            <div className="aboutMeContainer">
                <div className="photo">
                  <img src={Portrait} alt="me"/>
                </div>
                <div className="bio">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed cumque quos, tempora accusantium assumenda quaerat facilis similique unde, asperiores totam eius tenetur inventore dignissimos vel eaque reiciendis. Optio, voluptates?</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
