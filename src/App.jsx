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
import ShowBlog from './Module/Blog/ShowBlog';
import BlogDetails from './Module/Blog/BlogDetails';

import BookingForm from './Module/Booking/BookingForm';

function App() {


  

   

  return (
    <>
     <NavBar/>

     <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/blog' element={<ShowBlog/>} />
        <Route path='/blog/nature' element={<ShowBlog type={'1'}/>} />
        <Route path='/blog/marklands' element={<ShowBlog type={'1'}/>} />
        <Route path="blog/:id" element={<BlogDetails/>} />
        <Route path="blog/:id" element={<BlogDetails/>} />
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
          <Route path='/Booking-form' element={ <BookingForm
          fullNamePlaceholder="الاسم الكامل"
          phonePlaceholder="رقم التليفون"
          emailPlaceholder="عنوان البريد الإلكتروني"
          checkInPlaceholder="الدخول"
          checkOutPlaceholder="الخروج"
          guestsPlaceholder="عدد الضيوف"
          roomTypePlaceholder="نوع الغرفة"
          descriptionPlaceholder="الوصف"
          submitButtonText="احجز الآن"
        
          ratingCount="54"
    
        />}/> 
     </Routes>
    
     <Footer/>
    </>
  )
}

export default App;


