import React from 'react';
import ReactDOM from 'react-dom';
import PicScroller from './components/PicScroller';

const Modal = ({ setModal, displayModal }) => {

  console.log(displayModal);

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
  

    return ReactDOM.createPortal(
        <div onClick={()=>setModal(false)} style={modalContainer} className=''>
            <div onClick={(e)=>e.stopPropagation()} style={modalContent}>
                <div className='' style={topModal} >
                  <PicScroller pics={[1, 2, 4]}/>
                </div>
                <div className='' style={bottomModal}>
                  
                </div>
            </div>
        </div>, document.querySelector('#modal')

    );
}

export default Modal;