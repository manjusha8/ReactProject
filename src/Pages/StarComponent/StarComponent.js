import React from 'react';
import {FaStar } from 'react-icons/fa';

const StarComponent = (props) =>
{
    return(
        <div>
            {[...Array(5)].map( (star, i) => (
                <FaStar color ={i < props.starValue ? '#ffc741' : 'lightGray'}/>
            ))}

        </div>
    );
};

export default StarComponent;


