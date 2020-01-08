import React, { useEffect, useState } from 'react';

import Landing from './Landing';
import AboutMe from './AboutMe'
import Navbar from './components/Navbar';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Extra from './Extra';

const Main = () => {

  const [inView, setinView] = useState(null);

  const setNavBarStill = (arg) => {
    setinView(arg);
    if (!arg) {
      navBarWatch.disconnect();
      navBarWatch.observe(document.querySelector("#about"))
    }
  }

  const navBarWatch = new IntersectionObserver(([entries]) => {  // class IntersectionObserver monitors targeted div (#nav) to see if it intersects viewport
    setNavBarStill(entries.isIntersecting)
  }, { threshold: [1] })

  useEffect(() => {
    // observing a target element
    navBarWatch.observe(document.querySelector("#nav"));
  }, [])




  return (
    <>
      <Landing />
      <Navbar inView={inView} />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Extra />
    </>
  )
}

export default Main
