import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  love from '/assets/img/love.svg' ;
import  person from '/assets/img/person.svg' ;
import  person2 from '/assets/img/person2.png' ;
import  location from '/assets/img/location.svg' ;





const NavBar = () => {
  return (
    <>
    {[ 'sm' ].map((expand) => (
      <Navbar key={expand} expand={expand} className="NavVisit">
        <Container>
         <Navbar.Brand href="#home" className='NavVisitLogo'><span>Visit </span>Syria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
           >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>

            <Offcanvas.Body>
                 <Navbar.Collapse id="basic-navbar-nav" className='navCenter'>
               <Nav className="navGap">
            
           <NavLink to={'/'}>الرئيسية</NavLink>
           <NavLink to={'/aboutSyria'}>عن سوريا</NavLink>
             <NavLink to={'/explore'}>استكشف</NavLink>
             <NavLink to={'/blog'}>المدونة</NavLink>
             <NavLink to={'/recommendations'}>التوصيات</NavLink>
           </Nav>
         </Navbar.Collapse>
           <div className='navLove'><img src={love} alt='' /></div>
           <div className="person">
             <NavLink to={'/register'} className={'navPerson'}> <div> <img src={person2} alt={person} /></div> </NavLink>
             <div className="personContent">
              <h3>يوسف آدم</h3>
              <p>دمشق <img src={location} alt="" /> </p>
             </div>
           </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
     ))} 
  </>
    
  )
}

export default NavBar