import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Module/Footer/Footer';
import NavBar from './Module/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import HeroSection from './Module/Hero/HeromSection'
import AboutSyria from './Module/AboutSyria/AboutSyria'
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

     </Routes>
     <Footer/>
    </>
  )
}

export default App;
