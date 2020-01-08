import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ inView }) => {

  const [divView, setDiv] = useState(true);

  const divWatch = new IntersectionObserver(([entries]) => {  // class IntersectionObserver monitors targeted div (#nav) to see if it intersects viewport
    switch (entries.target.id) {
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
    divWatch.observe(document.querySelector("#extra"));
    divWatch.observe(document.querySelector("#contact"));
    divWatch.observe(document.querySelector("#portfolio"));
    divWatch.observe(document.querySelector("#landing"));
  }, [])


  return (

    <div id="nav" className={`${!inView ? 'sticky z-10 top-0' : ''} bg-white w-full h-14 border border-black`}>
      <ul className="flex items-center pl-4">
        <li className="mr-6 h-12 flex items-center">
          <div className={`${divView === 'landing' ? 'mChange' : ''}`}><HashLink smooth to="/#landing">Home</HashLink></div>
        </li>
        <li className="mr-6 h-12 flex items-center">
          <div className={`${divView === 'portfolio' ? 'mChange' : ''}`}><HashLink smooth to="/#portfolio">Projects</HashLink></div>
        </li>
        <li className="mr-6 h-12 flex items-center">
          <div className={`${divView === 'contact' ? 'mChange' : ''}`}><HashLink smooth to="/#contact">Contact</HashLink></div>
        </li>
        <li className="mr-6 h-12 flex items-center">
          <div className={`${divView === 'extra' ? 'mChange' : ''}`}><HashLink smooth to="/#extra">Extra</HashLink></div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;