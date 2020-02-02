import React from 'react';
import ReactDOM from 'react-dom';
//import PicScroller from './PicScroller';

const Modal = ({ setModal }) => {

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
    height: '95vh',
    width: '85vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
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
    jusifyContent: 'center'
  }
  

    return ReactDOM.createPortal(
        <div onClick={()=>setModal(false)} style={modalContainer} className=''>
            <div onClick={(e)=>e.stopPropagation()} style={modalContent}>
                <div className='' style={topModal} >
                  
                </div>
                <div className='' style={bottomModal}>
                 Formerly Car Info
                </div>
            </div>
        </div>, document.querySelector('#modal')

    );
}

export default Modal;