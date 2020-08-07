import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import allProjects from "../utils/projects.json";
import { useTrail, animated } from 'react-spring'
import "./Portfolio.css";

const Portfolio = () => {
  const [pFilter, setPFilter] = useState("A");
  const [projects, setProjects] = useState(allProjects.filter((p) => p.Description.includes('React')))

  const trail = useTrail(projects.length, {
    from: { marginLeft: -40, opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }
  })

  return (
    <div id="portfolio" style={{ height: "100vh" }}>
      <div className="portMenu">
        <div
          className={`${
            pFilter === "React" ? "selected techSelection" : "techSelection"
            } `}
          onClick={() => setProjects(allProjects.filter(p => p.Description.includes('React')))}
        >
          React
        </div>
        <div
          className={`${
            pFilter === "javascript"
              ? "selected techSelection"
              : "techSelection"
            } `}
          onClick={() => setProjects(allProjects.filter(p => p.Description.includes('javascript')))}
        >
          Javascript
        </div>
        <div
          className={`${
            pFilter === "jquery" ? "selected techSelection" : "techSelection"
            } `}
          onClick={() => setProjects(allProjects.filter(p => p.Description.includes('jquery')))}
        >
          JQuery
        </div>
        <div
          className={`${
            pFilter === "Node" ? "selected techSelection" : "techSelection"
            } `}
          onClick={() => setProjects(allProjects.filter(p => p.Description.includes('Node')))}
        >
          Node.js
        </div>
      </div>

      <div className={`portSlideContainer`}>
        {trail.map((props, index) => {
          return (
            <animated.div
              key={projects[index].githubUrl}
              style={props}
              className='box'
            >
              {<ProjectCard item={projects[index]} />}
            </animated.div>
          )
        })}
      </div>
    </div>
  );
};

export default Portfolio;
