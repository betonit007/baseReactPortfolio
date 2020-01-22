import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import allProjects from '../utils/projects.json';
import './Portfolio.css';

const Portfolio = () => {

  const [pFilter, setPFilter] = useState('A');

  return (
    <div id='portfolio' style={{height:'100vh'}}>
      <div className="portMenu">
        <div className="cursor-pointer" onClick={() => setPFilter('A')}>All</div>
        <div className='cursor-pointer' onClick={() => setPFilter('Node')}>Node.js</div>
        <div className='cursor-pointer' onClick={() => setPFilter('javascript')}>Javascript</div>
        <div className='cursor-pointer' onClick={() => setPFilter('jquery')}>JQuery</div>
        <div className='cursor-pointer' onClick={() => setPFilter('React')}>React</div>
      </div>
      <div className="portSlidesContainer">

        <div className={`${pFilter === 'A' ? '' : ''} portSlides`}>
          {allProjects.filter(p => p.Description.includes(pFilter)).map((p, i) => <ProjectCard key={i} item={p} />)}
        </div>

      </div>
    </div>

  )

}

export default Portfolio
