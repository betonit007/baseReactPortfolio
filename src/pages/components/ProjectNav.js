import React from 'react'

const ProjectNav = ({ setPFilter }) => {
  
    return (

        <div className="w-full flex justify-around">
            <div className="cursor-pointer" onClick={()=>setPFilter('A')}>All</div>
            <div className='cursor-pointer' onClick={()=>setPFilter('Node')}>Node.js</div>
            <div className='cursor-pointer' onClick={()=>setPFilter('javascript')}>Javascript</div>
            <div className='cursor-pointer' onClick={()=>setPFilter('jquery')}>JQuery</div>
            <div className='cursor-pointer' onClick={()=>setPFilter('React')}>React</div>
        </div>

    )
}

export default ProjectNav
