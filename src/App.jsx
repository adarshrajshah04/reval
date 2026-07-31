import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/global/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
import Services from './components/Services';
import Portfolio from './components/Portfolio.jsx';
import Team from './components/Team/Team.jsx';
import Contact from './components/Contact.jsx';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';


const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
       <Route index element={<Hero/>}/>
       <Route path='/Home' element={<Hero/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Services' element={<Services/>}/>
       <Route path='/Portfolio' element={<Portfolio/>}/>
       <Route path='/Team' element={<Team/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default App
