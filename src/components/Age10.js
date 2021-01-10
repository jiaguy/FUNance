import React, { useState } from 'react';
import Choices from './Choices';
import Stats from './Stats';


import lawn_mow from '../resources/lawn_mow.jpg';
import lemonade_stand from '../resources/lemonade_stand.jpg';
import walk_dog from '../resources/walk_dog.jpg';


import Calculator from './Calculator';


  


//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );


const Age10 = () => {
    // Declare a new state variable, which we'll call "count"
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
                <Choices id="choices"
                    choiceImage1={lawn_mow}
                    choiceTitle1="Mow Lawns" 
                    choiceDesc1="You mow your two neighbour's lawns every two weeks 
                    at a rate of $30 per session."
                    hideDiv={hidden}
                    buttonHandler={() => setHidden(true)}
                    choice1="mow()"
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

// function hideDiv() {
//     document.getElementById("choices").display = "none"
// }

export default Age10;