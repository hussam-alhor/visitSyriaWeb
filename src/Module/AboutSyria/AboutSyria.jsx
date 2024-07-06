import React from 'react'
import img from '../../assets/about-syria-hero.png'
import './about-syria.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import MyCard from '../Card/Card';

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
  )
}

export default AboutSyria