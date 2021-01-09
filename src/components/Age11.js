import React from 'react';
import ControlledCarousel from './Carousel';
import Stats from './Stats';

import lawn_mow from '../resources/lawn_mow.jpg';
import lemonade_stand from '../resources/lemonade_stand.jpg';
import walk_dog from '../resources/walk_dog.jpg';


const Age11 = () => {
    return (
       <div>
            <h1>Age 11</h1>
            <div className='Stat-box'>
                <Stats
                AgeNum="11"
                JobNm="Placeholder"
                CurrBalance="Placeholder"/>
            </div>
            <ControlledCarousel
            slideImage1={lawn_mow}
            slideTitle1="Lesson 1: Saving money"
            slideDesc1="This is how you save your money!"
            slideImage2={lemonade_stand}
            slideTitle2="Lesson 2: Compound interest"
            slideDesc2="You make money through compounding interest!"
            slideImage3={walk_dog}
            slideTitle3="Lesson 3: Start working early"
            slideDesc3="You need to make as much money as possible!" />
       </div>
    );
}
 
export default Age11;