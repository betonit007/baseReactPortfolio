import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = ({ inViewHigh, inViewLow }) => {

  const [divView, setDiv] = useState(true);

  const divWatch = new IntersectionObserver(([entries]) => {  // class IntersectionObserver monitors targeted div (#nav) to see if it intersects viewport
    switch (entries.target.id) {
      case 'about':
        setDiv('about')
        break;
      case 'extra':
        setDiv('extra')
        break;
      case 'portfolio':
        setDiv('portfolio')
        break;
      case 'contact':
        setDiv('contact')
        break;
      case 'landing':
        setDiv('landing')
        break;
      default:
        setDiv(true)
    }
  }, { threshold: [.6] })

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    divWatch.observe(document.querySelector("#about"));
    divWatch.observe(document.querySelector("#extra"));
    divWatch.observe(document.querySelector("#contact"));
    divWatch.observe(document.querySelector("#portfolio"));
    divWatch.observe(document.querySelector("#landing"));
  }, [])

  // This extra navWrapper, below, is to fill space when navbar dynamically goes to fixed position
  return (
    <div className="navWrapper">
      <div id="nav" className={`${(!inViewHigh && inViewLow) ? 'fixedNavbar' : 'navRelative'}  `}>
        <ul className="linkContainer">
          <li>
            <HashLink className={`navAnchor ${divView === 'landing' ? 'onPage' : 'offPage'}`} smooth to="/#landing">Home</HashLink>
          </li>
          <li>
            <HashLink  className={`navAnchor ${divView === 'about' ? 'onPage' : 'offPage'} `} smooth to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink  className={`navAnchor ${divView === 'portfolio' ? 'onPage' : 'offPage'} `} smooth to="/#portfolio">Projects</HashLink>
          </li>
          <li>
            <HashLink  className={`navAnchor ${divView === 'contact' ? 'onPage' : 'offPage'} `} smooth to="/#contact">Contact</HashLink>
          </li>
          <li>
            <HashLink  className={`navAnchor ${divView === 'extra' ? 'onPage' : 'offPage'} `} smooth to="/#extra">Extra</HashLink>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar;