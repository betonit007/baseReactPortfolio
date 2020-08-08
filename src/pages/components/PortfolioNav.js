import React from 'react'
import './PortfolioNav.css'

const PortfolioNav = ({ projects, setProjects, allProjects }) => {
    return (
        <div className="portMenu">
        <div
          className={`${projects.tech === "React" ? "selected techSelection" : "techSelection"} `}
          onClick={() => setProjects({selected: allProjects.filter(p => p.Description.includes('React')), tech: 'React'})}
        >
          React
        </div>
        <div
          className={`${projects.tech === "javascript" ? "selected techSelection" : "techSelection"} `}
          onClick={() => setProjects({selected: allProjects.filter(p => p.Description.includes('javascript')), tech: 'javascript'})}
        >
          Javascript
        </div>
        <div 
          className={`${projects.tech === "jquery" ? "selected techSelection" : "techSelection"} `}
          onClick={() => setProjects({selected: allProjects.filter(p => p.Description.includes('jquery')), tech: 'jquery'})}
        >
          JQuery
        </div>
        <div 
          className={`${projects.tech === "Node" ? "selected techSelection" : "techSelection"} `}
          onClick={() => setProjects({selected: allProjects.filter(p => p.Description.includes('Node')), tech: "Node"})}
        >
          Node.js
        </div>
      </div>
    )
}

export default PortfolioNav
