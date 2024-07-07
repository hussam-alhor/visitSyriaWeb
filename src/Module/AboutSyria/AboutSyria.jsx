import './AboutSyria.css';
import about from '/assets/img/About.png';
import back from '/assets/img/chevron_back.png';
import vector1 from '/assets/img/1.png';
import vector2 from '/assets/img/2.png';
import vector3 from '/assets/img/3.png';
import BackGreen from '/assets/img/greenBack.png';


// const AboutSyria = () => (
//     <div className="overview-section">
//       <div className="overview-map-container">
//         <img src={BackGreen} alt="Background" className="background-image" />
//         <img src={about} alt="Map of Syria" className="map-image" />
//         <div className="map-point point1">
//           <img src={vector1} alt="طبيعة ساحرة" />
//           <span>طبيعة ساحرة</span>
//         </div>
//         <div className="map-point point2">
//           <img src={vector2} alt="آثار ومعالم" />
//           <span>آثار ومعالم</span>
//         </div>
//         <div className="map-point point3">
//           <img src={vector3} alt="التاريخ والحضارات" />
//           <span>التاريخ والحضارات</span>
//         </div>
//       </div>
//       <div className="overview-text">
//         <h2>نبذة عامة</h2>
//         <p>
//           تقع سوريا في منطقة الشرق الأوسط، وتتمتع بموقع جغرافي متميز، حيث تربط بين آسيا وأفريقيا وأوروبا.
//           هذا الموقع جعلها مركزًا تجاريًا وثقافيًا مهمًا من آلاف السنين. تمتلك سوريا تاريخًا عريقًا يعود إلى آلاف
//           السنين، حيث كانت موطنًا للعديد من الحضارات القديمة، مثل الحضارة الآشورية والحضارة البابلية والحضارة الفينيقية.
//         </p>
//         <button className="custom-button">اقرأ المزيد <img src={back} alt="back" /></button>
//       </div>
//     </div>
//   );
  
//   export default AboutSyria;
  
  import React from 'react'
  import img from '/assets/img/hero.png'
  import './about-syria.css'
  import { useState } from 'react'
  import { Link, useLocation } from 'react-router-dom';
  import MyCard from '../Card/Card';
import NavBar from '../NavBar/NavBar';
  


const AboutSyria = ({ type }) => {
  const info = [
    {
      title: 'مدينة دمشق',
      description: 'مدينة تاريخية في سوريا',
      img: img,
      type: 'تاريخ'
    },
    {
      title: ' Krak des Chevaliers',
      description: 'قلعة تاريخية في حمص',
      img: img,
      type: 'تاريخ'
    },
    {
      title: 'مدينة حلب',
      description: 'مدينة تاريخية في سوريا',
      img: img,
      type: 'تاريخ'
    },
    {
      title: 'شلالات اللاذقية',
      description: 'شلالات رائعة في اللاذقية',
      img: img,
      type: 'طبيعة'
    },
    {
      title: 'مدينة حمص',
      description: 'مدينة تاريخية في سوريا',
      img: img,
      type: 'تاريخ'
    },
    {
      title: 'شاطئ اللاذقية',
      description: 'شاطئ رائع في اللاذقية',
      img: img,
      type: 'سياحة'
    },
    {
      title: 'مدينة دير الزور',
      description: 'مدينة تاريخية في سوريا',
      img: img,
      type: 'تاريخ'
    },
    {
      title: 'جبل قاسيون',
      description: 'جبل رائع في دمشق',
      img: img,
      type: 'طبيعة'
    },
    {
      title: 'مدينة حماه',
      description: 'مدينة تاريخية في سوريا',
      img: img,
      type: 'تاريخ'
    },
    {
      title: 'شلالات الرستن',
      description: 'شلالات رائعة في حمص',
      img: img,
      type: 'طبيعة'
    },
    {
      title: 'مدينة دير عطية',
      description: 'مدينة تاريخية في ريف دمشق',
      img: img,
      type: 'تاريخ'
    },
    {
      title: 'شاطئ طرطوس',
      description: 'شاطئ رائع في طرطوس',
      img: img,
      type: 'سياحة'
    },
    {
      title: 'مدينة السويداء',
      description: 'مدينة تاريخية في السويداء',
      img: img,
      type: 'تاريخ'
    },
  ]

    const [search, setSearch] = useState();

    const searchClick = () => {
        
    }

    const { pathname } = useLocation();

  return (
    <>
    <section className='about w-100'>
      <div className='about-hero w-100'>
        <div className='about-top-section w-100 position-relative z-0'>
          <img src={img} alt={''} className='hero-img object-fit-cover w-100 h-100'/>
          <div className='search-input position-absolute'>
            <span className='search-btn' onClick={searchClick}>ابحث</span>
            <input type='text' placeholder='اسم مؤسسة أو محافظة' value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
        </div>
        <div className={`tabs`}>
              <div className='tabs-div container mx-auto position-relative z-2' style={{marginTop: '-100px'}}>
                <Link className={pathname === '/aboutSyria'&& 'bg-white text-black'} to={'/aboutSyria'}>السياحة</Link>
                <Link className={pathname === '/aboutSyria/nature'&& 'bg-white text-black'} to={'/aboutSyria/nature'}>الطبيعة</Link>
                <Link className={pathname === '/aboutSyria/marklands'&& 'bg-white text-black'} to={'/aboutSyria/marklands'}>الاثار</Link>
                <Link className={pathname === '/aboutSyria/social'&& 'bg-white text-black'} to={'/aboutSyria/social'}>الحضارات</Link>
                <Link className={pathname === '/aboutSyria/history'&& 'bg-white text-black'} to={'/aboutSyria/history'}>التاريخ</Link>
            </div>
        </div>
      </div>
      <div className='about-cards'>
        <div className='mx-auto'>  
            { info.map((info_card,index) => (info_card?.type === type && <MyCard key={index} img={info_card.img} description={info_card.description} title={info_card.title}/>)) }
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutSyria

