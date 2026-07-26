import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/global/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
import Services from './components/Services';
import Portfolio from './components/Portfolio.jsx';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default App
