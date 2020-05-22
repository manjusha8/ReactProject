import React, { useState } from "react";
import {
  CardWrapper,
  ImageWrapper,
  ViewButtonWrapper,
  Wrapper,
  ContentWrapper,
  Title,
  Content,
  Ratings,
  Time,
} from "./GridStyle";
import StarComponent from "../StarComponent/StarComponent";
import ViewButton from "../ViewRecipeComponent/ViewButton";
import { FaClock } from "react-icons/fa";
import {withRouter} from 'react-router-dom';
import NotAvailable from "../NothingFound/NotAvailable";

function GridCard(props) {

  const [isShown, setIsShown] = useState(null);
  const [imgUrl]= useState(
    [
      require("../../assests/images/recipeThumb-01.jpg"),
      require("../../assests/images/recipeThumb-02.jpg"),
      require("../../assests/images/recipeThumb-03.jpg"),
      require("../../assests/images/recipeThumb-04.jpg"),
      require("../../assests/images/recipeThumb-05.jpg"),
      require("../../assests/images/recipeThumb-06.jpg"),
      require("../../assests/images/recipeThumb-07.jpg"),
      require("../../assests/images/recipeThumb-08.jpg"),
      require("../../assests/images/recipeThumb-09.jpg"),
    ]
  )

  function clickHandler(id) {
    setIsShown(id);
    console.log("isShown ", isShown);
  }

  const navigateToRecipe= (data) =>{
    props.history.push({
      pathname : "/viewrecipe",
      state: {
        data: data
      }
    });
    console.log("navigateToRecipe",data);
    
  }

  let tempCards = props.tempValue;
  let value = props.value;
  if (tempCards.length !== 0) {
    value = tempCards;
  }
  console.log("value",value[0])
  return (
    <Wrapper>
      {value.map((value, key) => (
        
        <CardWrapper key= {key}>
          
          <ImageWrapper
            onMouseOver={() => {
              clickHandler(value.id);
            }}
          >
            <img src={imgUrl[value.id]} style={{ width: "100%", height: "100%" }} />

            <ViewButtonWrapper active={value.id === isShown}>
              <ViewButton clicked = {() => navigateToRecipe(value)}/>
            </ViewButtonWrapper>
          </ImageWrapper>

          <ContentWrapper>
            <Title>
              {value.recipe} <hr />
            </Title>
            <Content>
              <Ratings>
                <StarComponent starValue={value.ratings} />
              </Ratings>
              <Time>
                <FaClock color={"#909090"} padding={"0 5px 0 0"} />
                {value.prepTime}
              </Time>
            </Content>
          </ContentWrapper>
          
        </CardWrapper>
        
       ))} 
    </Wrapper>
    
  );


}
export default withRouter(GridCard);
