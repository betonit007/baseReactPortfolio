import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Landing.css';

const AboutMe = ({ setinViewLow }) => {

  return (
    <div id='landing' style={{ height: '100vh' }}>

      <div className='plane1 planeFlight' />
      <div className='plane2 planeFlight' />
      <div className='plane3 planeFlight' />

      <div className="glass">
        <h1 className="heading-primary">
          Hello, I'm <span className='myName'>Tim Nagorski</span>
          <div className="heading-primary-sub">I'm a full-stack developer</div>
        </h1>


        <div className='hashLink-container'>
          <HashLink className="learn" onClick={setinViewLow(true)} smooth to="/#about">
            Click Here <div className='arrow'> &#10139;</div>
          </HashLink>
        </div>
      </div>
    </div>

  )
}

export default AboutMe
