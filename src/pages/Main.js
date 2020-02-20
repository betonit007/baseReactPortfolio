import React, { useEffect, useState } from 'react';
import Landing from './Landing';
import AboutMe from './AboutMe'
import Navbar from './components/Navbar';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Extra from './Extra';

const Main = () => {

  const [inViewLow, setinViewLow] = useState(null);
  const [inViewHigh, setinViewHigh] = useState(null);

  const watchLow = new IntersectionObserver(([entries]) => {  // class IntersectionObserver monitors targeted div (#nav) to see if it intersects viewport
    setinViewLow(entries.isIntersecting);
  }, { threshold: [.01] })

  const watchHigh = new IntersectionObserver(([entries]) => {  // class IntersectionObserver monitors targeted div (#nav) to see if it intersects viewport
    
    setinViewHigh(entries.isIntersecting)
  }, { threshold: [.01] })

  useEffect(() => {
    // observing a target element
    watchLow.observe(document.querySelector("#lower"));
    watchHigh.observe(document.querySelector("#landing"));

  }, [])

  return (
    <>
      <Landing setinViewLow={setinViewLow} />
      <Navbar inViewHigh={inViewHigh} inViewLow={inViewLow} />
      <AboutMe />
      <div id='lower'>
        <Portfolio />
        <Contact />
        {/* <Extra /> */}
      </div>
    </>
  )
}

export default Main
