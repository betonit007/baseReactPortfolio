import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import allProjects from '../utils/projects.json';

const Portfolio = () => {

  const [pFilter, setPFilter] = useState('A');

  return (
    <div id='portfolio' style={{height:'100vh', backgroundColor:'aqua'}}>
      <div className="w-full flex justify-around w-5/6">
        <div className="cursor-pointer" onClick={() => setPFilter('A')}>All</div>
        <div className='cursor-pointer' onClick={() => setPFilter('Node')}>Node.js</div>
        <div className='cursor-pointer' onClick={() => setPFilter('javascript')}>Javascript</div>
        <div className='cursor-pointer' onClick={() => setPFilter('jquery')}>JQuery</div>
        <div className='cursor-pointer' onClick={() => setPFilter('React')}>React</div>
      </div>
      <div className="h-screen flex justify-center pb-12">

        <div className={`${pFilter === 'A' ? 'grid' : 'flex-wrap'} max-h-screen flex self-center justify-center`}>
          {allProjects.filter(p => p.Description.includes(pFilter)).map((p, i) => <ProjectCard key={i} item={p} />)}
        </div>

      </div>
    </div>

  )

}

export default Portfolio
