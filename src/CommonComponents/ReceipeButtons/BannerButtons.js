import React, { Component } from "react";
import { ReceipeWrapper, Recipie, RecipieText } from "./BannerStyle";

function BannerButtons(props) {
  
  
    return (
      <ReceipeWrapper>
        {props.recipeItem.map((bannerItem) => (
          <Recipie
            key={bannerItem.id}
            active={props.active[bannerItem.id]}
            onClick={() => props.clicked(bannerItem.id)}
          >
            <RecipieText active={props.active[bannerItem.id]}>
              {bannerItem.recipe}
            </RecipieText>
          </Recipie>
        ))}
      </ReceipeWrapper>
    );
  
}

export default BannerButtons;
