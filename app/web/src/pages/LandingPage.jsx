import React from 'react'
import Home from './Home';
import About from './About';
import Services from './Services';
import Activities from './Activities';
import Footer from '../components/Footer';


const LandingPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Activities />
    </div>
  )
}

export default LandingPage;
