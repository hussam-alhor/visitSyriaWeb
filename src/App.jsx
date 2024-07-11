// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './Module/Footer/Footer';
// import NavBar from './Module/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import HeroSection from './Module/Hero/HeromSection'
import AboutSyria from './Module/AboutSyria/AboutSyria'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Module/Footer/Footer';
import NavBar from './Module/NavBar/NavBar';
import ShowItemsComponents from '../src/Module/Items/ShowItemsComponents';
import HeroComponent from './Module/HeroComponentwithSearch/HeroComponent';
import backgroundImage from '/assets/img/hero.png'
import Register from './Module/Auth/Register';
function App() {

  return (
    <>
     <NavBar/>

     <Routes>
      <Route path='/' element={<LandingPage/>} />
      {/* <Route path='' element={<HeroSection images={images} backgroundImage={hero} />} />  */}
      <Route path='/aboutSyria' element={<AboutSyria type={'سياحة'}/>} />
      <Route path='/aboutSyria/nature' element={<AboutSyria type={'طبيعة'}/>} />
      <Route path='/aboutSyria/marklands' element={<AboutSyria type={'معالم'}/>} />
      <Route path='/aboutSyria/history' element={<AboutSyria type={'تاريخ'}/>} />
      <Route path='/aboutSyria/social' element={<AboutSyria type={'حضارات'}/>} /> 
      <Route path='/show-items' element={<ShowItemsComponents  />} />
      <Route path='/hero-test' element ={
            <HeroComponent
                backgroundImage={backgroundImage}
                showSearch={true}  // or showSearch={false} to hide the search bar
              />} 
        />
      <Route path='/auth' element={<Register/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App;


