import React from 'react'
import MyCard from '../Card/Card';
import img from '/assets/img/hero.png';
import { Row } from 'react-bootstrap';
import './BlogSuggestion.css'

const BlogSuggestion = () => {
  const info = [
    {
      title: 'مدينة دمشق',
      description: 'مدينة تاريخية في سوريا',
      img: img,
      type: 'طبيعية',
      city: 'دمشق',
      id: '1'

    },
    {
      title: ' Krak des Chevaliers',
      description: 'قلعة تاريخية في حمص',
      img: img,
      type: 'أثرية',
      city: ' حمص',
      id: '2'
    }]
  return (
    <div className='BlogSuggestion'>
       <div className='about-cards'>
        <div className='mx-auto'>  
        <Row>
        <h3>اقتراحات</h3>
            { info.map((info_card,index) => ( <MyCard key={index} img={info_card.img} description={info_card.description} title={info_card.title} city={info_card.city} id={info_card.id}/>)) }
            </Row>
        </div>
       
      </div>
    </div>
  )
}

export default BlogSuggestion