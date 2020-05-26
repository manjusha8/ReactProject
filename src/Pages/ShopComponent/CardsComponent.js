import React, { Component } from "react";
import {
  CardWrapper,
  Wrapper,
  ImageWrapper,
  CartButton,
  Image,
  ContentWrapper,
  Category,
  Title,
  Price,
} from "./CardsStyle";
import {FaShoppingCart} from 'react-icons/fa';

class CardsComponent extends Component {
  state= {
    id: null,
    url: [
      require("../../assests/images/cardamom.jpg"),
      require("../../assests/images/mixed_herbs.webp"),
      require("../../assests/images/chilli_powder.webp"),
      require("../../assests/images/black_pepper.jpg"),
      require("../../assests/images/cumin_seeds.webp"),
      require("../../assests/images/garlic_granules.webp"),
  ]
  }

  clickHandler= (id)=> {
    this.setState({id})
  }

  render() {
    return (
    <div>
      <Wrapper>
        {this.props.data.map((value, key) => (
          <CardWrapper key= {key}>
            <ImageWrapper onMouseOver= {()=> this.clickHandler(value.id)}>
              <Image src={this.state.url[value.id]} alt="products"/>
              <CartButton active= {this.state.id=== value.id} onClick= {()=> this.props.clicked(value.id)} style={{transition: "transform .3s,opacity .1s,background .25s"}}> 
                <div style= {{padding: '10px'}}><FaShoppingCart color= 'white'/></div>
              </CartButton>
            </ImageWrapper>
            
            <ContentWrapper>
              <Category>{value.category}</Category>
              <Title>{value.title}</Title>
              <Price>${value.price}</Price>
            </ContentWrapper>
          </CardWrapper>
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default CardsComponent;
