import React from 'react';
import './JobMarket.scss';
import {Link} from 'react-router-dom';


const jobMarket = ()=>{
  return ( 
    <div className='container'>
        <div className='primary'>
          <img className='primaryBackground' src='./assets/Path 135.png'/>
          <div className='primaryTitle'>
            <h3>how is the <br/> <span>Job market looking?</span></h3>
            <Link to='/Link'>
                <button>List</button>    
            </Link> 
            <button>Map</button>
          </div>
          <div>

          </div>
        </div>
    </div>
  );
}
export default jobMarket;

