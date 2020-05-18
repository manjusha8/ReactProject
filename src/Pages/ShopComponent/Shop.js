import React, { Component } from "react";
import {
  HeaderWrapper,
  Header,
  ShopLeft,
  ShopRight,
  Wrapper,
  MainContent,
  LeftWrapper,
  RightWrapper
} from "./ShopStyle";
import CardsComponent from "./CardsComponent";
import HeaderComponent from "../../CommonComponents/HeaderComponent/HeaderComponent";
import SearchBox from "../SearchComponent/SearchBox";
import CartComponent from './CartComponent';
import axios from 'axios';

class Shop extends Component {
    state= {
        cardsData: null,
        selectedCard: []
    };

    componentDidMount()
    {
        axios.get('http://demo2746324.mockable.io/chow/shop')
        .then(response => this.setState({cardsData: response.data}))
        .catch(err => console.log("no response from mock: ",err))
    }

    cartHandler= (id)=> {
      let temp= [...this.state.selectedCard]
      this.state.cardsData.map((value,index)=> {
        if(id=== value.id)
        {
          temp.push(value)
          console.log("temp is: ",value)
        }
      })

      this.setState({
        selectedCard: temp
      })
    }

  render() {
    return this.state.cardsData!== null ? (
      <div>
        <HeaderComponent />
        <HeaderWrapper>
          <Header>
            <ShopLeft>Shop</ShopLeft>
            <ShopRight>you are here : Home > Shop</ShopRight>
          </Header>
        </HeaderWrapper>
        <Wrapper>
            <SearchBox />
          <MainContent>
            <LeftWrapper style= {{marginRight: "38px", width: "250px"}}>
                <CartComponent data= {this.state.selectedCard}/>
            </LeftWrapper>
            <RightWrapper style= {{marginRight: "20px"}}>
              <CardsComponent data= {this.state.cardsData} clicked= {this.cartHandler}/>
              {/* <div style= {{border: "1px solid grey", height: "50px", width: "100px"}}> 
              </div> */}
            </RightWrapper>
          </MainContent>
        </Wrapper>
      </div>
    ): null;
  }
}

export default Shop;
