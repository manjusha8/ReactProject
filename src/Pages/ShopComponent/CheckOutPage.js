import React, { Component } from "react";
import { Wrapper } from "./checkOutStyle";
import {HeaderWrapper, Header, ShopLeft, ShopRight} from './ShopStyle';
import ItemsComponent from '../ItemsComponent/ItemsComponent';
import HeaderComponent from "../../CommonComponents/HeaderComponent/HeaderComponent";
class CheckOutPage extends Component {

    state= {
        data: null
      };

  componentDidMount() {
    let result= this.props.location.state;
    if (result=== null || result=== undefined || result=== '') {
      this.props.history.push("*");
    } 
    else {
        this.setState({
          data: result.data
        });
      }
    
    }

  render() {
    return this.state.data !== null ? (
      <div>
        <HeaderComponent />
        <HeaderWrapper>
          <Header>
            <ShopLeft>Shop</ShopLeft>
            <ShopRight>you are here : Home > Shop > checkout</ShopRight>
          </Header>
        </HeaderWrapper>
        <Wrapper>
          <div>
          <ItemsComponent data= {this.state.data}/>
        </div>
        <div style= {{marginLeft: "50px"}}>
            <div>your order has been placed , will be delivered soon !! </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}> Thank You !! </div>
            <div style={{ textAlign: "center", marginTop: "20px"}}>
              Go Back To <a href="/shop">shop</a>
            </div>
          </div>
        </Wrapper>
      </div>
    ) : null;
  }
}

export default CheckOutPage;
