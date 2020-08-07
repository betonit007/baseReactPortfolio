import React, { useState } from 'react';
import Modal from '../Modal';

import './ProjectCard.css'

const ProjectCard = ({ item, item: { techs, imgName, projectName, dark } }) => {
  
  const backGroundImage = require(`../../utils/imgs/${imgName}`)

  const styles = {
    // backgroundImage: `linear-gradient( to bottom, rgba(185, 224, 240, 0.801), rgba(67, 139, 247, 0.801)),url(${cloud})`, will work for imported images
    backgroundImage: `url(${backGroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: "center top"
  };


  const [displayModal, setModal] = useState(false);

  const renderModal = (item) => {
    document.body.style.overflow = 'hidden'
    setModal(item);
  }
  return (

    <div style={styles} className="pCard" >
      {displayModal &&
        <Modal
          displayModal={displayModal}
          setModal={setModal}
          imgName={imgName}
          item={item}
          dark={dark ? true : false}
        />
      }
      <div className="projectInfo">
        <p className="pName">{projectName}</p>
        <p className="techs">{techs}</p>
        <div className="learnMore" onClick={() => renderModal(item)}>Learn More</div>
      </div>
    </div>
  )
}

export default ProjectCard
