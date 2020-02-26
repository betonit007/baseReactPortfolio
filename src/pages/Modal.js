import React from 'react';
import ReactDOM from 'react-dom';
import PicScroller from './components/PicScroller';
import { ReactComponent as Github } from '../utils/imgs/SVG/github.svg'
import './Modal.css';

const Modal = ({ setModal, imgName, item, dark }) => {

  const picsArray = item.scrollPics ? item.scrollPics.split(' ') : imgName.split(' ');

  const scrollImages = []

  picsArray.forEach(pic => {
    let img = require(`../utils/imgs/${pic}`)
    scrollImages.push(img)
  })

  const renderModal = () => {
    document.body.style.overflow = 'visible'
    setModal(false)
  }


  return ReactDOM.createPortal(
    <div onClick={() => renderModal(false)} className='modalContainer'>
      <div className='modalContent' onClick={(e) => e.stopPropagation()} >
        <div className='topModal'>
          <PicScroller pics={scrollImages} dark={dark} />
        </div>
        <section className='bottomModal'>
          <header className='projectName'>{item.projectName}</header>
          <div className="projectDescription">
            {item.summary}
          </div>
          <div className="projectBrief">
            {item.summary2}
          </div>
          <div className="viewApp">
            <a className="gotoApp" href={item.deployedLink} target="_blank" rel="noopener noreferrer">VIEW APP &#10150;</a>
            <a className="gotoGithub" href={item.githubUrl} target="_blank" rel="noopener noreferrer"><Github/></a>
            <div className='close' onClick={() => renderModal(false)}>x</div>
          </div>
        </section>
      </div>
    </div>, document.querySelector('#modal')

  );
}

export default Modal;