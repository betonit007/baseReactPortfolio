import React, { useState } from 'react'
import './PicScroller.css'

const PicScroller = ({ pics }) => {
    
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
        <div className='scrollerContainer' style={{ display: 'flex', width: '100%', backgroundImage: `url(${pics[picPosition]})`, backgroundSize: `contain`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          {/* to blur background - image filter: 'blur(6px)' */}
          <div className="pointerLeft" onClick={()=>togglePicDown()}>
            &#60;
          </div>
          <div className="center" > 
             
          </div>
          <div className="pointerRight" onClick={()=>togglePicUp()}>
            &#62;
          </div>
        </div>
    )
}

export default PicScroller
