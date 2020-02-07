import React from 'react';
import ReactDOM from 'react-dom';
import PicScroller from './components/PicScroller';
import './Modal.css';

const Modal = ({ setModal, imgName, item }) => {

  const picsArray = item.scrollPics ? item.scrollPics.split(' ') : imgName.split(' ');

  const scrollImages = []
  picsArray.forEach(pic => {
    let img = require(`../utils/imgs/${pic}`)
    scrollImages.push(img)
  })

  const modalContainer = {
      backgroundColor: 'rgba(0, 0, 0, .7)',
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%'
  }

  const modalContent = {
    height: '85%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: '50px'
  }

  const topModal = {
    height: '100%',
    display: 'flex',
    jusifyContent: 'center'
  }

  const bottomModal = {
    backgroundColor: 'grey',
    height: '50%',
    display: 'flex',
    jusifyContent: 'center',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  }
  
  const renderModal = () => {
    document.body.style.overflow = 'visible'
    setModal(false)
  }
  

    return ReactDOM.createPortal(
        <div onClick={()=>renderModal(false)} style={modalContainer} className=''>
            <div onClick={(e)=>e.stopPropagation()} style={modalContent}>
                <div className='' style={topModal} >
                  <PicScroller pics={scrollImages}/>
                </div>
                <div className='' style={bottomModal}>
                  
                </div>
            </div>
        </div>, document.querySelector('#modal')

    );
}

export default Modal;