import React from 'react';


import Budget from './Budget'

import Stats from './Stats';

   
const Age12 = () => {
    return (
       <div>
          <h1>Age 12</h1>


          <Budget />

      <div className='Stat-box'>
      <Stats
      AgeNum="12"
      JobNm="Placeholder"
      CurrBalance="Placeholder"/>
      </div>

       </div>
    );
}
 
export default Age12;