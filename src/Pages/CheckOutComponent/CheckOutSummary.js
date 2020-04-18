import React from 'react';
import sliderA_01 from '../../assests/images/sliderA_01.jpg'
import CheckOut from './CheckOut';

function CheckOutSummary()
{

    return(
        <div>
            <div style = {{maxHeight: '250px',overflow: 'hidden',opacity:'0.5'}}>
                <img src={sliderA_01} alt = "background image" style={{zIndex : '-1',height:'100%',width:'100%'}} />
            </div>
            <div style ={{position : 'absolute' , top : '160px' , left : '50px' , right : '50px',zIndex:'0'}}>
                <CheckOut/>
            </div>
        </div>
    );
}

export default CheckOutSummary;