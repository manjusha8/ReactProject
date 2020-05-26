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
  CheckOut,
  CartEmpty
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


  findSubTotal = () => {
    let total = 0;
    this.props.data.map((value, key) => {
       total = value.price + total;
    });
    return total;
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
        <div style={{width: "230px", padding: "8px 10px 30px 10px"}}>
          {this.props.data.length ? 
          <CartWrapper>
            {this.props.data.map((value, key) => (
                  <div key= {key}>
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
                    <span></span>{value.quantity}<span>X {value.price}</span>
                  </Price>
                  </TitleBlock> 
                </div>

            ))}
              <div>
                <hr style={{ width: "80%", backgroundColor: "#f2f2f2" }} />
                <SubtotalAmount>
                  <Subtotal>Subtotal: </Subtotal>
                  <SubtotalPrice>${this.findSubTotal()}</SubtotalPrice>
                </SubtotalAmount>
                <div style={{ textAlign: "center" }}>
                  <CheckOut
                   onClick={()=> this.checkOutHandler(this.props.data)}
                  >
                    CHECKOUT
                  </CheckOut>
                </div>
              </div>
           </CartWrapper>

          : 
          <CartWrapper>
              <CartEmpty>no items in cart!!</CartEmpty>
          </CartWrapper>
          }
          
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(CartComponent);
