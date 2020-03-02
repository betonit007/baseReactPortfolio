import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import allProjects from '../utils/projects.json';
import './Portfolio.css';

const Portfolio = () => {

  const [pFilter, setPFilter] = useState('A');


  return (
    <div id='portfolio' style={{ height: '100vh' }}>
      <div className="portMenu">
        <div
          className={`${pFilter === 'A' ? 'selected techSelection' : 'techSelection'} `}
          onClick={() => setPFilter('A')}
        >
          All
            </div>
        <div
          className={`${pFilter === 'Node' ? 'selected techSelection' : 'techSelection'} `}
          onClick={() => setPFilter('Node')}
        >
          Node.js
            </div>
        <div
          className={`${pFilter === 'javascript' ? 'selected techSelection' : 'techSelection'} `}
          onClick={() => setPFilter('javascript')}
        >
          Javascript
            </div>
        <div
          className={`${pFilter === 'jquery' ? 'selected techSelection' : 'techSelection'} `}
          onClick={() => setPFilter('jquery')}
        >
          JQuery
            </div>
        <div
          className={`${pFilter === 'React' ? 'selected techSelection' : 'techSelection'} `}
          onClick={() => setPFilter('React')}
        >
          React
            </div>
      </div>

      <div className='portSlideContainer'>
        <div className={`${pFilter === 'A' ? 'allSlides' : 'otherSlides'} `}>
          {allProjects.filter(p => p.Description.includes(pFilter)).slice(0, 9).map((p, i) =>
            <ProjectCard
              key={i}
              item={p}
            />
          )
          }
        </div>
      </div>

    </div>

  )

}

export default Portfolio
