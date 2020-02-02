import React from 'react';
import ReactDOM from 'react-dom';
//import PicScroller from './PicScroller';

const Modal = () => {

  const modalContainer = {
      backgroundColor: 'rgba(0, 0, 0, .7)',
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      jusifyContent: 'center',
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
        <div onClick={()=>console.log('deSelect')} style={modalContainer} className=''>
            <div onClick={(e)=>e.stopPropagation()} >
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