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

function GridCard(props) {
  // const [isShown, setIsShown] = useState(false);

  const [isShown, setIsShown] = useState(null);
  // const [val , setVal] = useState(0);

  // const [isShown,setIsShown] = useState(false);

  function clickHandler(id) {
   
    setIsShown(id);

    console.log("isShown ", isShown);
  }

  return (
    <Wrapper>
      {props.value.map((value,index) => (
        <CardWrapper>
          <ImageWrapper> 
            <img
              src={value.imgUrl}
              onMouseOver={() => {
                clickHandler(value.id);
              }}
              
              
              style={{ width: "100%", height: "100%" }}
            />

            {/* <div>{isShown[value.id]}</div> */}

            {console.log(value.id === isShown)}
            <ViewButtonWrapper active= {value.id === isShown}>
              <ViewButton />
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
export default GridCard;
