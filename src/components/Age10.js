import React, { Component } from 'react';
import Choices from './Choices';
import Stats from './Stats';


import lawn_mow from '../resources/lawn_mow.jpg';
import lemonade_stand from '../resources/lemonade_stand.jpg';
import walk_dog from '../resources/walk_dog.jpg';


import Calculator from './Calculator';


const Age10 = () => {
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
       </div>
    );
}
 
export default Age10;