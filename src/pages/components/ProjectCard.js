import React, { useState } from 'react';

const ProjectCard = ({item: { Description, deployedLink, githubUrl, imgUrl , projectName}}) => {
  
  const [testBool, setTestBool] = useState(false);

  const changeBoolState = () => {
    setTestBool(!testBool);
  }
       
  return (

    <div className="flex flex-shrink" onMouseLeave={() => changeBoolState()} onMouseEnter={() => changeBoolState()} >
    
        <img src={imgUrl} alt={projectName}/>
      
     
        <div className="text-xl">{projectName}</div>
        <a href={githubUrl} target='_blank' rel="noopener noreferrer">Project Link</a>
        <a href={deployedLink} target='_blank' rel="noopener noreferrer">Github Link</a>
  
    </div>

  )
}

export default ProjectCard
