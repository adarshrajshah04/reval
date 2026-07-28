import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/global/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
import Services from './components/Services';
import Portfolio from './components/Portfolio.jsx';
import Team from './components/Team.jsx';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Team/>
    </div>
  )
}

export default App
