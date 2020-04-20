import React, { Component } from 'react';
import sliderA_01 from '../../assests/images/sliderA_01.jpg'
import CheckOut from './CheckOut';
import {withRouter} from 'react-router-dom';

class CheckOutSummary extends Component
{
    state ={
        data :{} 
    }
    componentDidMount(){

        // let val = new URLSearchParams(this.props.location.data)
        this.setState({
            data : (this.props.location.state)

        })
        console.log("checkout summary",this.props.location.state);
    }
    render()
    {
        return(
            <div>
                <div style = {{maxHeight: '250px',overflow: 'hidden',opacity:'0.5'}}>
                    <img src={sliderA_01} alt = "background image" style={{zIndex : '-1',height:'100%',width:'100%'}} />
                </div>
                <div style ={{position : 'absolute' , top : '160px' , left : '50px' , right : '50px',zIndex:'0'}}>
                    <CheckOut data= {this.props.location.state}/>
                </div>
            </div>
        );
    }
    
}

export default CheckOutSummary;