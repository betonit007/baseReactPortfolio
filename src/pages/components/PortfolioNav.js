import React from 'react'
import { useSpring, animated } from 'react-spring'
import './PortfolioNav.css'

const PortfolioNav = ({ projects, setProjects, allProjects }) => {

  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <div className="portMenu">

      <div
        className={`${projects.tech === "MERN" ? "selected techSelection" : "techSelection"} `}
        onClick={() => setProjects({ selected: allProjects.filter(p => p.techs.includes('MERN')), tech: 'MERN' })}
      >
        MERN
      </div>

      <div
        className={`${projects.tech === "React" ? "selected techSelection" : "techSelection"} `}
        onClick={() => setProjects({ selected: allProjects.filter(p => p.techs.includes('React')), tech: 'React' })}
      >
        React
      </div>
      <div
        className={`${projects.tech === "javascript" ? "selected techSelection" : "techSelection"} `}
        onClick={() => setProjects({ selected: allProjects.filter(p => p.techs.includes('Javascript')), tech: 'Javascript' })}
      >
        Javascript
        </div>
      <div
        className={`${projects.tech === "jquery" ? "selected techSelection" : "techSelection"} `}
        onClick={() => setProjects({ selected: allProjects.filter(p => p.techs.includes('jquery')), tech: 'jquery' })}
      >
        JQuery
        </div>
      <div
        className={`${projects.tech === "Node" ? "selected techSelection" : "techSelection"} `}
        onClick={() => setProjects({ selected: allProjects.filter(p => p.techs.includes('Node')), tech: "Node" })}
      >
        Node.js
        </div>
    </div>
  )
}

export default PortfolioNav
