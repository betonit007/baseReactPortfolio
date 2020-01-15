import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import './Landing.css';

const AboutMe = ({ setinViewLow }) => {

  return (
    <div id='landing' style={{ height: '100vh' }}>
      
      <h1 className="heading-primary">
        <span className="heading-primary-main">Hello, I'm Tim Nagorski</span>
        <span className="heading-primary-sub"></span>
      </h1>

      <div>
        <HashLink onClick={setinViewLow(true)} smooth to="/#about">
          Click Here
        </HashLink>
      </div>
    </div>

  )
}

export default AboutMe
