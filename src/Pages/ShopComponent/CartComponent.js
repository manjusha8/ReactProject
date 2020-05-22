import React, { Component } from "react";
import {
  Wrapper,
  Cart,
  BreakThrough,
  CartWrapper,
  ImageBlock,
  ImageWrapper,
  Image,
  TitleBlock,
  Title,
  Price,
  SubtotalAmount,
  Subtotal,
  SubtotalPrice,
  ViewCart,
  CheckOut,
  NoItems
} from "./CartStyle";
import { withRouter } from "react-router-dom";

class CartComponent extends Component {

  state= {
    url: [
      require("../../assests/images/cardamom.jpg"),
      require("../../assests/images/mixed_herbs.webp"),
      require("../../assests/images/chilli_powder.webp"),
      require("../../assests/images/black_pepper.jpg"),
      require("../../assests/images/cumin_seeds.webp"),
      require("../../assests/images/garlic_granules.webp"),
  ],
  }

  checkOutHandler = (data) => {
    this.props.history.push({
      pathname: "/checkoutpage",
      state: {
        data: data
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <div style={{ margin: "0px 20px 30px 0px" }}>
          <Cart> Cart </Cart>
          <div style={{ width: "175px", display: "inline-block" }}>
            <BreakThrough />
          </div>
        </div>
        {console.log("cart component props: ", this.props)}
        <div style={{width: "230px", padding: "8px 10px 30px 10px"}}>
          {this.props.data !== null ? 
          <div>
            {this.props.data.map((value, index) => (
              <CartWrapper>
                <ImageBlock>
                  <ul style={{ listStyleType: "none" }}>
                    <ImageWrapper>
                      <Image
                        src={this.state.url[value.id]}
                        alt="image"
                      />
                    </ImageWrapper>
                  </ul>
                </ImageBlock>
                <TitleBlock>
                  <Title>
                    {value.title}
                  </Title>
                  <Price>
                    <span></span>1<span>X {value.price}</span>
                  </Price>
                </TitleBlock> 

                <hr style={{ width: "80%", backgroundColor: "#f2f2f2" }} />
                <SubtotalAmount>
                  <Subtotal>Subtotal: </Subtotal>
                  <SubtotalPrice>{value.price}</SubtotalPrice>
                </SubtotalAmount>
                <div style={{ textAlign: "center" }}>
                  <ViewCart disabled>
                    VIEW CART
                  </ViewCart>
                </div>
                <div style={{ textAlign: "center" }}>
                  <CheckOut onClick={()=> this.checkOutHandler(value)}>
                    CHECKOUT
                  </CheckOut>
                </div>
                </CartWrapper>))}
            </div> 
          : 
            <p>no items in cart</p>
          
          }
          
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(CartComponent);
