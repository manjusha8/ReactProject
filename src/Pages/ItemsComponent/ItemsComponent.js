import React, { Component } from "react";
import {
    CardWrapper,
    ImageWrapper,
    Image,
    ContentWrapper,
    Category,
    Title,
    Price,
  } from "../ShopComponent/CardsStyle";
  import {Wrapper} from './Style';

class ItemsComponent extends Component {
    state = {
        url: [
          require("../../assests/images/cardamom.jpg"),
          require("../../assests/images/mixed_herbs.webp"),
          require("../../assests/images/chilli_powder.webp"),
          require("../../assests/images/black_pepper.jpg"),
          require("../../assests/images/cumin_seeds.webp"),
          require("../../assests/images/garlic_granules.webp"),
        ]
    }
  render() {
    return (
      <Wrapper>
        {this.props.data.map((value, key)=> (
          <CardWrapper key={key}>
          <ImageWrapper>
            <Image src={this.state.url[value.id]} alt="image" />
          </ImageWrapper>

          <ContentWrapper>
            <Category>{value.category}</Category>
            <Title>{value.title}</Title>
            <Price>{value.price}</Price>
          </ContentWrapper>
        </CardWrapper>
    ))}
          
      </Wrapper>
    );
  }
}

export default ItemsComponent;
