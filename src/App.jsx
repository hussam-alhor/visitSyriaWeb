import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Module/Footer/Footer';
import NavBar from './Module/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {


  return (
    <>
     <NavBar/>
     <Routes>
     <Route path='' element={<LandingPage/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App;
