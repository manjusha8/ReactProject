import React, { Component } from 'react';
import {Facebook} from 'react-spinners-css';

class Loader extends Component{

    render()
    {
        return(
            <div style= {{position: "absolute", top: "200px", left: "450px"}}>
                <Facebook color="#8DC63F"/>
            </div>
        );
    }
}

export default Loader;