
import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import HeroSection from '../Hero/HeromSection'
import hero from '/assets/img/hero.png'
import img from '/assets/img/hero.png'
import './ShowBlog.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import MyCard from '../Card/Card';
import axios from 'axios'


const ShowBlog = ({ type }) => {
    // const info = [
    //     {
    //       title: 'مدينة دمشق',
    //       description: 'مدينة تاريخية في سوريا',
    //       img: img,
    //       type: 'طبيعية',
    //       city: 'دمشق',
    //       id: '1'

    //     },
    //     {
    //       title: ' Krak des Chevaliers',
    //       description: 'قلعة تاريخية في حمص',
    //       img: img,
    //       type: 'أثرية',
    //       city: ' حمص',
    //       id: '2'
    //     },
    //     {
    //       title: 'مدينة حلب',
    //       description: 'مدينة تاريخية في سوريا',
    //       img: img,
    //       type: 'أثرية',
    //       id: '3'
    //     },
    //     {
    //       title: 'شلالات اللاذقية',
    //       description: 'شلالات رائعة في اللاذقية',
    //       img: img,
    //       type: 'طبيعية',
    //       id: '4'
    //     },
    //     {
    //       title: 'مدينة حمص',
    //       description: 'مدينة تاريخية في سوريا',
    //       img: img,
    //       type: 'أثرية',
    //       id: '5'
    //     }]

    const [info, setInfo] = useState([]);

    useEffect(() => {
      // Fetch user data when component mounts
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/all_blogs`, {
           
          });
          const data= response.data.blog;
          console.log(data);
  

        } catch (error) {
          console.error('Error fetching user data', error);
        }
      };
     
  
      fetchUserData();
    }, []);
    const { pathname } = useLocation();

return (
    <div className='ShowBlog'>
    <section className='about w-100'>
      <div className='about-hero w-100'>
        <div className='about-top-section w-100 z-0'>
          <img src={img} alt={''} className='hero-img object-fit-cover w-100 h-100'/>
        </div>
        <div className={`tabs`}>
            <div className='tabs-div container  z-2'>
                <Link className={pathname === '/aboutSyria/nature'&& 'bg-white text-black'} to={'/blog/nature'}>الطبيعية</Link>
                <Link className={pathname === '/aboutSyria/marklands'&& 'bg-white text-black'} to={'/blog/marklands'}>الأثرية</Link>
            </div>
        </div>
      </div>
      <div className='about-cards'>
        <div className='mx-auto'>  
        { info.map((info_card,index) => (
                            <MyCard 
                                key={index} 
                                img={info_card.img} 
                                description={info_card.description} 
                                title={info_card.title} 
                                city={info_card.city} 
                                id={info_card.id}
                            />
                        )) }
        </div>
      </div>
    </section>
    </div>
)
}

export default ShowBlog