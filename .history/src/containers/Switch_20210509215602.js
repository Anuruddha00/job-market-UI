import React from 'react';
import './Switch.scss';

const checkbox = () =>{
    return(
        <div className="row">
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
        </div>       
    )
} 
export default checkbox;
