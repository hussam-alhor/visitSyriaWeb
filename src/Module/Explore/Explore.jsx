import React from 'react'
import './Explore.css'
import HeroSection from '../Hero/HeromSection'
import hotelBG from '../../../public/assets/img/hotelBG.png'

import card1 from '/assets/img/Card 1.png'
import card2 from '/assets/img/Card 3.png'
import card3 from '/assets/img/Card 4.png'
import stars from '../../../public/assets/img/stars.png'
import bedHotel from '../../../public/assets/img/bedHotel.png'
export default function Explore({ nameTitle, location, description,
    logo, mainImg, oneImg, twoImg, ThreeImg,
    service1, service2, service3, service4, rooms }) {
    const images = [
        { src: card1, alt: 'آثار ومعالم' },
        { src: card3, alt: 'التاريخ والحضارات' },
        { src: card2, alt: 'طبيعة ساحرة', }
    ];
    return (
        <div className=''>
            <HeroSection images={images} backgroundImage={hotelBG} />
            <div className="container la-container">
                <div className="la-info-logo">
                    <div className="la-info">
                        <span className="la-title">{nameTitle}</span>
                        <img className='stars' src={stars} alt="" />
                        <p className="la-location">{location}</p>
                    </div>
                    <img src={logo} alt="" className="la-logo" />
                </div>
                <p className="la-description">
                    {description}
                </p>
                <div className="galery-images">
                    <img src={mainImg} alt="" className="la-one" />
                    <div className="small-images">
                        <img src={oneImg} alt="" className="la-two" />
                        <img src={twoImg} alt="" className="la-three" />
                        <img src={ThreeImg} alt="" className="la-four" />
                    </div>
                </div>
                <div className="la-line"></div>
                {/* Evaluation and services */}
                <div className="la-evaluation-services">
                    <div className="la-ev-se">
                        <h4 className="la-title">تقييمات</h4>
                        <ul className="rate">
                            <div className="rate-box"> <li>النظافة</li><img src={stars} alt="" /></div>
                            <div className="rate-box"> <li>القيمة</li><img src={stars} alt="" /></div>
                            <div className="rate-box"> <li>الموقع</li><img src={stars} alt="" /></div>
                            <div className="rate-box"> <li>الخدمة</li><img src={stars} alt="" /></div>
                        </ul>
                    </div>
                    <div className="la-ev-se">
                        <h4 className="la-title">تقييمات</h4>
                        <ul className="rate">
                            <div className="rate-box"> {service1} </div>
                            <div className="rate-box"> {service2} </div>
                            <div className="rate-box">  {service3}</div>
                            <div className="rate-box"> {service4}  </div>
                        </ul>
                    </div>
                    {rooms !== null && <div className="la-ev-se">
                        <h4 className="la-title"></h4>
                        <ul className="rate">
                            <div className="rate-box"> قاعات للإجتماعات و المؤتمرات</div>
                            <div className="rate-box"> انتظار مجاني للسيارات</div>
                            <div className="rate-box"> انترنت عالي السرعة</div>
                            <div className="rate-box"> خدمة توصيل من و إلى المطار</div>
                        </ul>
                    </div>}
                </div>
                <div className="la-line"></div>

                {/* Price and Rooms */}
                <div className="la-evaluation-services">
                    <div className="la-ev-se">
                        <h4 className="la-title">الغرف والاجنحة</h4>
                        <ul className="rate">
                            <div className="rate-box">لشخص واحد</div>
                            <div className="rate-box">لشخصين</div>
                            <div className="rate-box">جناح عائلي</div>
                        </ul>
                    </div>
                    {/* <div className="la-ev-se">
                        <h4 className="la-title">عروض الاسعار</h4>
                        <ul className="rate">
                            <div className="rate-box"> إقامة / غرف و أجنحة /</div>
                            <div className="rate-box"> مطاعم و تراسات </div>
                            <div className="rate-box"> حمام سباحة</div>
                            <div className="rate-box"> مسبح و أنشطة أطفال</div>
                        </ul>
                    </div> */}
                    <div className="la-res">
                        <img src={bedHotel} alt="" />
                        <div className='la-reverse'>احجز الان</div>
                    </div>
                </div>
                <div className="la-line"></div>
                {/* Comment And Review */}
                <div className="comments">
                    <div className="la-comments">
                        <h4>التعليقات والرماجعات</h4>
                        <span >233 تعليق</span>
                    </div>
                    <div className="la-boxs">
                        <div className="la-child-box">تقييم</div>
                        <div className="la-child-box">اكتب تعليق</div>
                        <div className="la-child-box">اضف الى الالمفضلة</div>
                    </div>
                </div>
                <div className="la-cards">
                    <div className="la-card">
                        <h4 className="la-card-title">Sara Adam</h4>
                        <span className="la-date">2-22-2222</span>
                        <p>My recent stay at [Hotel Name] was nothing short of exceptional.
                            From the moment I arrived until my departure,
                            every aspect of the hotel exceeded my expectations.</p>
                    </div>
                    <div className="la-card">
                        <h4 className="la-card-title">Sara Adam</h4>
                        <span className="la-date">2-22-2222</span>
                        <p>My recent stay at [Hotel Name] was nothing short of exceptional.
                            From the moment I arrived until my departure,
                            every aspect of the hotel exceeded my expectations.</p>
                    </div>
                </div>
                <div className="la-line"></div>
                {/* Info Contact */}
                <div className="la-contact">
                    <div className="la-contact-box">
                        <p>Social Media</p>
                        <p>24/24</p>
                    </div>
                    <div className="la-contact-box">
                        <p>user@admin.com</p>
                        <p>user@admin.com</p>
                    </div>
                    <div className="la-contact-box">
                        <p>Syria - latakia</p>
                        <p>09932458737</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
