import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import './Footer.css'
import facebook from '/assets/img/facebook.svg'
import instgram from '/assets/img/instgram.svg'
import linkedIn from '/assets/img/linkedIn.svg'
import twitter from '/assets/img/twitter.svg'
const Footer = () => {
  return (
    <>

    <div className='footer'>
        <Container>
            <Row className='footerContent'>
                <Col xs='12' sm="2" className='footerBor'>
                    <h1  className='footerLogo'><span>Visit </span>Syria</h1>
                </Col>
                <Col xs='6' sm='2' className='footerBor'>
                   <div className="footerSec">
                      <span>أرقام مفيدة</span>
                      <span className='footerSpan'>الأسئلة المتكررة</span>
                      <span>توصيات</span>
                   </div>
                </Col>
                <Col xs='6' sm='2' className='footerBor'>
                   <div className="footerSec">
                      <span>معالم وآثار</span>
                      <span className='footerSpan'>اساسيات السفر</span>
                      <span>سياسة الخصوصية</span>
                   </div>
                </Col>
                <Col xs='12' sm='2' className='footerEndSec'>
                    <div className="footerEmail">
                        <img src="" alt="" />
                        <p>visit syria @info.sy</p>
                    </div>
                    <div className="footerIcon">
                        <img src={facebook} alt="" className='footerI' />
                        <img src={instgram} alt="" className='footerI' />
                        <img src={linkedIn} alt="" className='footerI' />
                        <img src={twitter} alt="" className='footerI'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="footerEnd">
    <Container>
            <Row>
                <Col className='text-center'>
                  <p>جميع الحقوق محفوظة لوزارة السياحة في الجمهورية العربية السورية - &copy; 2023 </p>
                </Col>
            </Row>
    </Container>
    </div>
    </>
  )
}

export default Footer