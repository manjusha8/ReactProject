import React, { Component } from "react";
import {HeaderWrapper, Header, ShopLeft, ShopRight} from '../ShopComponent/ShopStyle';
import HeaderComponent from "../../CommonComponents/HeaderComponent/HeaderComponent";
import RecipeForm from "./RecipeForm";

class SubmitRecipe extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <HeaderWrapper>
          <Header>
            <ShopLeft>Shop</ShopLeft>
            <ShopRight>you are here : Home > Submit Recipe</ShopRight>
          </Header>
        </HeaderWrapper>
        <RecipeForm/>
      </div>
    );
  }
}

export default SubmitRecipe;
