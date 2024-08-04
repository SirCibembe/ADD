import React from 'react'
import AboutText from '../components/AboutText'
import AboutBackground from '../assets/AboutBackground.png'
import '../App.css';
const About = () => {
  return (
    <div
      className="About-container bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${AboutBackground})`,backgroundPosition: '10% 3%'}}
    >
      <AboutText/>
    </div>
  )
}

export default About
