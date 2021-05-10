import React from 'react';
import './JobMarket.scss';
import Switch from './Switch';

const jobMarket = ()=>{
  return ( 
    <div className='container'>
        <div className='primary'>
          <img className='primaryBackground' src='./assets/Path 135.png'/>
          <div className='primaryTitle'>
            <h3>how is the <br/> <span>Job market looking?</span></h3>        
          </div>
          
        </div>
    </div>
  );
}
export default jobMarket;

