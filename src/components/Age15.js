import React from 'react';
import Stats from './Stats';
   
const Age15 = () => {
    return (
       <div>
          <h1>Age 15</h1>
          <div className='Stat-box'>
                <Stats
                AgeNum="15"
                JobNm="Placeholder"
                CurrBalance="Placeholder"/>
            </div>
       </div>
    );
}
 
export default Age15;