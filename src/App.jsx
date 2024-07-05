import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Module/Footer/Footer';
import NavBar from './Module/NavBar/NavBar';
import ListOfComponents from './Module/SharedComponents/ListOfComponents';

import StepIndicator from './Module/SharedComponents/StepIndicator';
import ShowRestaurants from './Module/Restaurants/ShowRestaurants';

function App() {





  return (

    <>
      <NavBar />


      <Routes>
        <Route path='/restaurants' element={<ShowRestaurants  />} />

      </Routes>

      <Footer />
    </>

  );
};



export default App;
