import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/global/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
