import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import background from "../assets/split-bg.png";
import About from './About';
import AboutMe from './AboutMe';
import Explore from './Explore';
import Skills from './Skills';
import Portfolio from '../Portfolio';
import Contact from './Contact';
import Footer from './Footer';


const AppLayout = () => {
  return (
    <>
      <div
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navigation />
        <Hero />
      </div>
      <About />
      <AboutMe />
      <Explore />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default AppLayout
