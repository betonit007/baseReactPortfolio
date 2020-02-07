import React from 'react';
import Portrait from '../utils/imgs/portrait.jpg'
import SocialLinks from './components/SocialLinks';


import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id='about' style={{ height: '100vh' }}>
            <div className="aboutMeContainer">
                <div className="photo">
                    <img src={Portrait} alt="me" />
                </div>
                <div className="bio">
                    <h1 className='aboutMeHeader'>About Me</h1>
                    <h3 className='aboutMeSub'>I'm a web developer based in Morrisville, NC - the heart of The Research Triangle. I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, teaching or pushing pixels, you'll find me flying drones, 3d modeling or 'working' in the garage.</h3>
                    <div className="socialLinks">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
