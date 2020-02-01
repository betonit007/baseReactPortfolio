import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import allProjects from '../utils/projects.json';
import './Portfolio.css';

const Portfolio = () => {

  const [pFilter, setPFilter] = useState('A');

  return (
    <div id='portfolio' style={{ height: '100vh', backgroundColor: 'aqua' }}>
      <div className="portMenu">
        <div className="techSelection all" onClick={() => setPFilter('A')}>All</div>
        <div className='techSelection node' onClick={() => setPFilter('Node')}>Node.js</div>
        <div className='techSelection javascript' onClick={() => setPFilter('javascript')}>Javascript</div>
        <div className='techSelection jquery' onClick={() => setPFilter('jquery')}>JQuery</div>
        <div className='techSelection react' onClick={() => setPFilter('React')}>React</div>
      </div>

      <div className={`${pFilter === 'A' ? 'allSlides' : 'otherSlides'} `}>
        {allProjects.filter(p => p.Description.includes(pFilter)).slice(0, 8).map((p, i) => <ProjectCard key={i} item={p} />)}
      </div>
    </div>

  )

}

export default Portfolio
