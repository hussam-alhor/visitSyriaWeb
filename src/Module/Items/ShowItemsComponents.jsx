import React from 'react';
import TabSection from '../TabComponent/TabSection';
import HeroComponent from '../HeroComponentwithSearch/HeroComponent';
const ShowItemsComponents = () => {
    const backgroundImage="src/assets/images/hero.svg";
    return (
        <div>
         <HeroComponent
          backgroundImage={backgroundImage}
          showSearch={true}  // or showSearch={false} to hide the search bar
        />
   {/* <div className="tab-section-overlay"> */}
            <TabSection  />
{/* </div> */}
        </div>
    );
}

export default ShowItemsComponents;
