import React, { useState } from 'react';
import Calculator from './Calculator';
import Choices from './Choices';
import ControlledCarousel from './Carousel';
import Stats from './Stats';

import lawn_mow from '../resources/lawn_mow.jpg';
import lemonade_stand from '../resources/lemonade_stand.jpg';
import walk_dog from '../resources/walk_dog.jpg';
import budget_slide1 from '../resources/budget_slide1.PNG';
import budget_slide2 from '../resources/budget_slide2.PNG';
import budget_slide3 from '../resources/budget_slide3.PNG';
import budget_slide4 from '../resources/budget_slide4.PNG';
import budget_slide5 from '../resources/budget_slide5.PNG';


const Age10 = () => {
    // Declare a new state variable, which we'll call "hidden"
    const [hidden, setHidden] = useState(false);

    return (
       <div className='App'>
            <h1>Age 10</h1>
            <div className='Stat-box'>
                <Stats
                AgeNum="10"
                JobNm="Placeholder"
                CurrBalance="Placeholder"/>
            </div>
            <div className ='Card-deck-div'>
                <Choices
                    choiceImage1={lawn_mow}
                    choiceTitle1="Mow Lawns" 
                    choiceDesc1="You mow your two neighbour's lawns every two weeks 
                    at a rate of $30 per session."
                    hideDiv={hidden}
                    buttonHandler={() => setHidden(true)}
                    choiceImage2={lemonade_stand}
                    choiceTitle2="Lemonade Stand" 
                    choiceDesc2="Run a lemonade stand with your friend every weekend,
                    making a $20 profit every time."
                    choiceImage3={walk_dog}
                    choiceTitle3="Dog Walking" 
                    choiceDesc3="Walk your elderly neighbour's dog three times a week,
                    earning $10 every walk."/>
                <Calculator />
            </div>

            <div>
            {
            !hidden? null :
                <ControlledCarousel
                    // buttonHandler={() => setHidden(false)}
                    slideImage1={budget_slide1}
                    slideImage2={budget_slide2}
                    slideImage3={budget_slide3}
                    slideImage4={budget_slide4}
                    slideImage5={budget_slide5}/>
            }
            </div>
       </div>
    );
}

export default Age10;