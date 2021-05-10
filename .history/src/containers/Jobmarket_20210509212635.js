import React from 'react';
import './JobMarket.scss';
import List from '../components/List/List';

const jobMarket = ()=>{
  return ( 
    <div className='container'>
        <div className='primary'>
          <img className='primaryBackground' src='./assets/Path 135.png'/>
          <div className='primaryTitle'>
            <h3>how is the <br/> <span>Job market looking?</span></h3>

              <span className="switcher switcher-1">
                <input type="checkbox" id="switcher-1">
                <label for="switcher-1"></label>
              </span> 
                  
          </div>
        </div>
    </div>
  );
}
export default jobMarket;

