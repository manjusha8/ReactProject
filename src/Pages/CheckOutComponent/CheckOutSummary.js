import React, { Component } from 'react';
import sliderA_01 from '../../assests/images/sliderA_01.jpg'
import CheckOut from './CheckOut';
import {withRouter} from 'react-router-dom';
import SearchBox from '../SearchComponent/SearchBox';
import AuthorBox from '../AuthorComponent/AuthorBox';
import { MainWrapper , LeftWrapper ,RightWrapper,AuthorWrapper} from './SummaryStyle';
import HeaderComponent from '../../CommonComponents/HeaderComponent/HeaderComponent';
import NoPageFound from '../NoPageFoundComponent/NoPageFound';


class CheckOutSummary extends Component
{
    state= {
        data: null
      };
    
      componentDidMount() {
        let result= this.props.location.state;
        if (result=== null || result=== undefined || result=== '') {
          this.props.history.push('*');
        } else {
          this.setState({
            data: result.data
          });
        }
      }
    render()
    {
        return  this.state.data!== null ?( 
            <div>
                <HeaderComponent />
                <div style = {{maxHeight: '250px',overflow: 'hidden',opacity:'0.5'}}>
                    <img src={sliderA_01} alt = "background image" style={{zIndex : '-1',height:'100%',width:'100%'}} />
                </div>
                <MainWrapper>
                <LeftWrapper>
                    <CheckOut data= {this.state.data}/>
              </LeftWrapper>

              <RightWrapper>
                    <div>
                      <SearchBox/>
                    </div>
                    <AuthorWrapper>
                      <AuthorBox/>
                    </AuthorWrapper>
              </RightWrapper>
            </MainWrapper>
          </div>
        ) : null;
    }
    
}

export default CheckOutSummary;