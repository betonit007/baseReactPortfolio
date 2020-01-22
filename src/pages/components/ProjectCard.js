import React, { useState } from 'react';
import cloud from '../../utils/imgs/cloud.png';

const ProjectCard = ({item: { Description, deployedLink, githubUrl, imgUrl , projectName}}) => {
  

 const styles = { 
  // backgroundImage: `linear-gradient( to bottom, rgba(185, 224, 240, 0.801), rgba(67, 139, 247, 0.801)),url(${cloud})`, will work for imported images
  backgroundImage: `linear-gradient( to bottom, rgba(185, 224, 240, 0.801), rgba(67, 139, 247, 0.801)),url(${imgUrl})`,
  backgroundSize: 'cover',
  backgroundosition: "center",
  height: '250px',
  width: '300px'
 };
  
  const [testBool, setTestBool] = useState(false);

  const changeBoolState = () => {
    setTestBool(!testBool);
  }
       
  return (

    <div className="" style={styles} onMouseLeave={() => changeBoolState()} onMouseEnter={() => changeBoolState()} >
        {/* <img src={imgUrl} alt={projectName}/> */}
        <div className="text-xl">{projectName}</div>
        <a href={githubUrl} target='_blank' rel="noopener noreferrer">Project Link</a>
        <a href={deployedLink} target='_blank' rel="noopener noreferrer">Github Link</a>
  
    </div>

  )
}

export default ProjectCard
