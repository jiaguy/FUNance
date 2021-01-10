import React from 'react';
import Stats from './Stats';
   
const Age13 = () => {
    return (
       <div>
          <h1>Age 13</h1>
          <div className='Stat-box'>
                <Stats
                AgeNum="13"
                JobNm="Placeholder"
                CurrBalance="Placeholder"/>
            </div>
       </div>
    );
}
 
export default Age13;