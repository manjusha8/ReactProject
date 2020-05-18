import React, { Component } from "react";
import {
    CardWrapper,
    ImageWrapper,
    CartButton,
    Image,
    ContentWrapper,
    Category,
    Title,
    Price,
  } from "../ShopComponent/CardsStyle";

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
      <div>
          {console.log("props: ",this.props.data)}
        {/* {this.props.data.map((value, index) => ( */}
          <CardWrapper>
            <ImageWrapper>
              <Image src={this.state.url[this.props.data.id]} alt="image" />
            </ImageWrapper>

            <ContentWrapper>
              <Category>{this.props.data.category}</Category>
              <Title>{this.props.data.title}</Title>
              <Price>{this.props.data.price}</Price>
            </ContentWrapper>
          </CardWrapper>
        {/* ))} */}
      </div>
    );
  }
}

export default ItemsComponent;
