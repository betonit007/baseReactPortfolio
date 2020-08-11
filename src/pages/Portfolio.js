import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import allProjects from "../utils/projects.json";
import { useTrail, animated } from 'react-spring'
import PortfolioNav from './components/PortfolioNav'
import "./Portfolio.css";

const Portfolio = () => {

  const [projects, setProjects] = useState({ selected: allProjects.filter((p) => p.Description.includes('React')), tech: "React" })

  const trail = useTrail(projects.selected.length, {
    from: { marginTop: -100, opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { marginTop: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }
  })


  return (
    <div id="portfolio" style={{ height: "100vh" }}>
      {/* Navbar for selection of different techs */}
      <PortfolioNav
        projects={projects}
        setProjects={setProjects}
        allProjects={allProjects}
      />
      {/* Container where selected technology and associated projects will render */}
      <div className={`portSlideContainer`}>
        {trail.map((props, index) => {
          return (
            <animated.div
              key={projects.selected[index].githubUrl}
              style={props}
              className='animated-container'
            >
              {<ProjectCard item={projects.selected[index]} />}
            </animated.div>
          )
        })}
      </div>
    </div>
  );
};

export default Portfolio;
