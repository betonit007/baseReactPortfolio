import React, { useState } from 'react'
import './PicScroller.css'

const PicScroller = ({ pics, dark }) => {

    const [picPosition, setPicPosition] = useState(0)

    const togglePicUp = () => {
        
        if (pics[picPosition + 1]) {
            setPicPosition(picPosition + 1)
        } else { setPicPosition(0)};
    }

    const togglePicDown = () => {
        if (picPosition !== 0) {
            setPicPosition(picPosition - 1)
        } else if (picPosition === 0) {
            setPicPosition((pics.length - 1));
        }
        else { setPicPosition(0)};
    }
    

    return (
        <div className='scrollerContainer' style={{ display: 'flex', width: '100%', background: `url(${pics[picPosition]}) no-repeat center center/cover`}}>
          {/* to blur background - image filter: 'blur(6px)' */}
          <div className='pointerLeftContainer'>
            <div className={`pointerLeft ${dark && 'dark'}`} onClick={()=>togglePicDown()}>&#60;</div>
          </div>
          <div className="center" > 
             
          </div>
          <div className='pointerRightContainer'>
            <div className={`pointerRight  ${dark && 'dark'}`} onClick={()=>togglePicUp()}>&#62;</div>
          </div>
        </div>
    )
}

export default PicScroller
