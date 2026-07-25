import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/global/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default App
