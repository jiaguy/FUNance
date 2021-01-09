import React from 'react';
import Choices from './Choices';
   
const Age10 = () => {
    return (
       <div className='App'>
            <h1>Age 10</h1>
            <div className ='Card-deck-div'>
                <Choices 
                    choiceTitle1="Mow Lawns" 
                    choiceDesc1="You mow your two neighbour's lawns every two weeks 
                    at a rate of $30 per session." 
                    choiceTitle2="Lemonade Stand" 
                    choiceDesc2="Run a lemonade stand with your friend every weekend,
                    making a $20 profit every time." 
                    choiceTitle3="Dog Walking" 
                    choiceDesc3="Walk your elderly neighbour's dog three times a week,
                    earning $10 every walk."/>
            </div>
       </div>
    );
}
 
export default Age10;