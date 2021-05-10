import React from 'react';
import './JobMarket.scss';
import './Switch.scss';

const jobMarket = ()=>{
  return ( 
    <div className='container'>
        <div className='primary'>
          <img className='primaryBackground' src='./assets/Path 135.png'/>
          <div className='primaryTitle'>
            <h3>how is the <br/> <span>Job market looking?</span></h3>        
          </div>
            <div class="row">
              <div class="toggle-button-cover">
                <div class="button-cover">
                  <div class="button b2" id="button-10">
                    <input type="checkbox" class="checkbox"/>
                      <div class="knobs">
                      <span>YES</span>
                  </div>
              <div class="layer"></div>
            </div>  
        </div>
    </div>
  );
}
export default jobMarket;

