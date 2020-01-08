import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const AboutMe = () => {

  const [testBool, setTestBool] = useState(false);
  const changeBoolState = () => {
    setTestBool(!testBool);
  }

  return (
    <div id='landing' style={{height:'100vh', backgroundColor:'orange'}}>
      <HashLink smooth to="/#about">
        click here
      </HashLink>
    </div>

  )
}

export default AboutMe
