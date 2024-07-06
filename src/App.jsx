import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Module/Footer/Footer';
import NavBar from './Module/NavBar/NavBar';
import ShowItemsComponents from '../src/Module/Items/ShowItemsComponents';
import HeroComponent from './Module/HeroComponentwithSearch/HeroComponent';
function App() {

return (

  <>
    <NavBar />
     

    <Routes>
      <Route path='/show-items' element={<ShowItemsComponents  />} />
      <Route path='/hero-test' element ={
            <HeroComponent
                backgroundImage={backgroundImage}
                showSearch={true}  // or showSearch={false} to hide the search bar
              />} 
        />
   
    </Routes>



    <Footer />

</>
);
};



export default App;


