import BlogSection from '../../Module/BlogSection/BlogSection'
import AboytSyria from '../../Module/AboutSyria/AboutSyria'
import HeroSection from '../../Module/Hero/HeromSection'
import Recommendations from '../../Module/Recommendations/Recommendations'
import card1 from '/assets/img/Card 1.png'
import card2 from '/assets/img/Card 3.png'
import card3 from '/assets/img/Card 4.png'
import hero from '/assets/img/hero.png'

const LandingPage = () => {
    const images = [
        { src: card1, alt: 'آثار ومعالم', label: 'آثار ومعالم' },
        { src: card3, alt: 'التاريخ والحضارات', label: 'التاريخ والحضارات' },
         { src: card2 , alt: 'طبيعة ساحرة', label: 'طبيعة ساحرة' }
      ];
  return (
    <>
      <HeroSection  images={images} backgroundImage={hero} />
      <AboytSyria/>
      <Recommendations  />

      <div className="mt-5 mb-5">
      <BlogSection />
      </div>
    

    </>
  )
}

export default LandingPage
