import  { useState } from 'react';
import './Recommendations.css';
import nasma from '/assets/img/nasma.png';
import damas from '/assets/img/damas.png';
import hama from '/assets/img/hama.png';
import heartIcon from '/assets/img/heart-icon.png';
import back from '/assets/img/Vector2.png'
import next from '/assets/img/Vector.png'
const RecommendationCard = ({ image, title, description, button }) => (
  <div className="recommendation-card">
    <div className="card-image">
      <img src={image} alt={title} />
      
    </div>
    <img src={heartIcon} alt="heart icon" className="heart-icon" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button">{button}</button>
    </div>
  </div>
);

const Recommendations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    
    {
      image: nasma,
      title: "نسمة جبل",
      description: "يقع منتجع نسمة جبل في ريف اللاذقية على ارتفاع 950 م عن سطح البحر حيث الإطلالة البحرية الرائعة استمتع بتجربة مميزة: غرف مريحة، وخدمة عالية الجودة استمتع بإقامة لاتنسى في قلب الطبيعة السورية",
      button: 'اقرأ المزيد'
    },
    {
      image: damas,
      title: "قلعة دمشق",
      description: "تقع قلعة دمشق في الركن الشمالي الغربي من أسوار مدينة دمشق عاصمة سوريا. هي قلعة محصنة أُنشئت في العصور الوسطى، تعد من أهم معالم فن العمارة العسكرية والإسلامية في سوريا في العصر الأيوبي ....",
      button: 'اقرأ المزيد'
    },
    {
      image: hama,
      title: "نواعير حماة",
      description: "تقع في مدينة حماة على نهر العاصي وهي آلات مائية خشبية تدور بالقوة المائية وتتواجد على شواطئ نهر العاصي في مدينة حماة. وتنقل الماء منه بواسطة صناديق إلى حوض علوي ومنه يجري في قنوات محمولة على قناطر ...",
      button: 'اقرأ المزيد'
    }
    
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="recommendations">
       <h1>التوصيات</h1>
       <p>نقدم لكم افضل الاماكن الممكن زيارتها في سوريا بناءً على تجارب الزوار والأفضل تقييماً</p>
       <div className="recommendations-section">
     
     <div className="carousel">
       <div className="cards-container">
         {cards.map((card, index) => (
           <RecommendationCard key={index} {...card} />
         ))}
   
       </div>
     </div>
     <div className="dots">
       <img className='icon' src={next} alt="next" />
       {cards.map((_, index) => (
         <span
           key={index}
           className={`dot ${index === activeIndex ? 'active' : ''}`}
           onClick={() => handleDotClick(index)}
         ></span>
         
       ))}
           <img className='icon' src={back} alt="back" />
     </div>
   </div>
    </div>
  
  );
};

export default Recommendations;
