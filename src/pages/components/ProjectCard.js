import React, { useState } from 'react';
import './ProjectCard.css'

const ProjectCard = ({ setModal, item: { techs, deployedLink, githubUrl, imgUrl, projectName } }) => {


   const styles = { 
    // backgroundImage: `linear-gradient( to bottom, rgba(185, 224, 240, 0.801), rgba(67, 139, 247, 0.801)),url(${cloud})`, will work for imported images
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundosition: "center"
   };

  const [testBool, setTestBool] = useState(false);

  const changeBoolState = () => {
    setTestBool(!testBool);
  }

  return (

    <div style={styles} className="pCard" onMouseLeave={() => changeBoolState()} onMouseEnter={() => changeBoolState()} >
      {/* <img src={imgUrl} alt="Project Cover" /> */}
      <div className="projectInfo">
        <p className="pName">{projectName}</p>
        <p className="techs">{techs}</p>
        <div className="learnMore" onClick={()=>setModal(true)}>Learn More</div>
      </div>
    </div>

  )
}

export default ProjectCard
