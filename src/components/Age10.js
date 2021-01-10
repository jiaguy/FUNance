import React, { useState } from 'react';
import Calculator from './Calculator';
import Choices from './Choices';
import ControlledCarousel from './Carousel';
import Stats from './Stats';

import lawn_mow from '../resources/lawn_mow.svg';
import lemonade_stand from '../resources/lemonade_stand.svg';
import walk_dog from '../resources/walk_dog.jpg';
import bank_slide1 from '../resources/bank_slide1.PNG';
import bank_slide2 from '../resources/bank_slide2.PNG';
import bank_slide3 from '../resources/bank_slide3.PNG';
import bank_slide4 from '../resources/bank_slide4.PNG';
import bank_slide5 from '../resources/bank_slide5.png';
import ModalBox from './Modal';

const Age10 = () => {
    // Declare a new state variable, which we'll call "hidden"
    const [hidden, setHidden] = useState(false);

    return (

       <div className='App'>
            <center>
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

            </div>
            
            <div>
            {
            !hidden? null :
            <div className='Slide-deck'>
                <p>Nice! Now that you have a job, it's time to think about where you want to store your money. Then click "Complete" when you're done.</p>
                <div className='Slide-deck'>
                <ControlledCarousel
                    // buttonHandler={() => setHidden(false)}
                    slideImage1={bank_slide1}
                    slideImage2={bank_slide2}
                    slideImage3={bank_slide3}
                    slideImage4={bank_slide4}
                    slideImage5={bank_slide5}/>



            <ModalBox
            NextPage={"/age11"}/>
                </div>
            }
                

            </div>
            </center>

       </div>
    );
}

export default Age10;