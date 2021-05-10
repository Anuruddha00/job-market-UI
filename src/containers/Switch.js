import React from 'react';
import './Switch.scss';

const checkbox = () =>{
    return(
        <div className='container'>

            {/* <div className="button b2" id="button-10">
                <input type="checkbox" class="checkbox"/>
                    <div class="knobs">
                        <span>YES</span>
                    </div>
                <div class="layer"></div>
            </div> */}

            <div className='primary'>
                <div className='primaryButton'>
                    <input type='checkbox' className='PrimaryCheckbox'/>
                    <div className='primaryKnobs'>
                        <span>Map</span>
                    </div>
                    <div className='PrimaryLayer'></div>
                </div>
            </div>


        </div>       
    )
} 
export default checkbox;
