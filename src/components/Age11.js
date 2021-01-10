import React from 'react';
import ControlledCarousel from './Carousel';
import Modal from './Modal';
import CalcModal from './CalcModal';
import Calculator from './Calculator';
import ModalBox from './Modal';



import Budget from './Budget'
import Stats from './Stats';

import budget_slide1 from '../resources/budget_slide1.PNG';
import budget_slide2 from '../resources/budget_slide2.PNG';
import budget_slide3 from '../resources/budget_slide3.PNG';
import budget_slide4 from '../resources/budget_slide4.PNG';
import budget_slide5 from '../resources/budget_slide5.PNG';


const Age11 = () => {
    return (
       <div>
            <div className='Stat-box'>
                <Stats
                AgeNum="11"
                JobNm="Placeholder"
                CurrBalance="Placeholder"/>
            </div>
            <div className='Slide-deck'>
            <ControlledCarousel
                slideImage1={budget_slide1}
                slideImage2={budget_slide2}
                slideImage3={budget_slide3}
                slideImage4={budget_slide4}
                slideImage5={budget_slide5}/>
            </div>
            <CalcModal/>
            <Budget/>
            <ModalBox
            NextPage={"/age12"}/>
       </div>
    );
}
 
export default Age11;