import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Module/Footer/Footer'
import NavBar from './Module/NavBar/NavBar'
import hero from '/assets/img/hero.png'
import card1 from '/assets/img/Card 1.png'
import card2 from '/assets/img/Card 3.png'
import card3 from '/assets/img/Card 4.png'

import HeroSection from './Module/Hero/HeromSection'
function App() {

  const images = [
    { src: card1, alt: 'آثار ومعالم' },
    { src: card3, alt: 'التاريخ والحضارات' },
     { src: card2 , alt: 'طبيعة ساحرة', }
  ];
  return (
    <>
     <NavBar/>
     <Routes>
     <Route path='' element={<HeroSection images={images} backgroundImage={hero} />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
