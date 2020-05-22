import React,{useState} from 'react';
import StarComponent from '../StarComponent/StarComponent';
import {Wrapper,Header,ImageWrapper,InfoWrapper,Infomartion,Heading,Detail,LeftDiv,Print,RightButton,IngredientsWrapper,Ingredients,IngredientsContent,ListWrapper,Lists,CheckBox,LabelList,BasicContent} from './CheckOutStyle';
import {DirectionsWrapper,DirectionsContent,Directions,Box,DirectionList} from './CheckOutStyle';
import{Title,Ratings,Reviews} from './CheckOutStyle';
function CheckOut (props){
    
    const[checked , setChecked] = useState ([false,false,false,false,false,false,false,false,false])
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

    const handleCheck = (id) =>
    {
        let newChecked = [...checked];
        newChecked[id] = !newChecked[id]
        setChecked (newChecked);

    }

        return(
            <Wrapper>
                <div>
                    <Header>
                        <Title>{props.data.recipe}</Title>
                        <div>
                            <Ratings><StarComponent starValue = {props.data.ratings}/></Ratings>
                            <Reviews>({props.data.ratings}  reviews)</Reviews>
                        </div>
                    </Header>
                    <ImageWrapper>
                        <img src = {imgUrl[props.data.id]} alt = "recipe card" style = {{width : '100%',height : '100%'}} />
                    </ImageWrapper>
                    <InfoWrapper>
                        <LeftDiv>
                        <Infomartion>
                            <Heading>serves :</Heading>
                            <Detail>{props.data.servings} people</Detail>
                        </Infomartion>
                        <Infomartion>
                            <Heading>Prep Time :</Heading>
                            <Detail>{props.data.prepTime}</Detail>
                        </Infomartion>
                        <Infomartion>
                            <Heading>Cooking :</Heading>
                            <Detail>{props.data.cooking}</Detail>
                        </Infomartion>
                        <Infomartion style ={{borderRight : 'none ! important'}}>
                            <Heading>Calories :</Heading>
                            <Detail>{props.data.Calories}</Detail>
                        </Infomartion>
                        </LeftDiv>
                        <RightButton>
                            <Print>print</Print>
                        </RightButton>
                    </InfoWrapper>
                </div>
                <BasicContent>
                This is a very basic beef stew. It’s easy, delicious and inexpensive to make. While there are hundreds of variations of this traditional recipe, it’s hard to improve on this version’s savory and comforting goodness.
                </BasicContent>
                <IngredientsWrapper>
                    <Ingredients>Ingredients</Ingredients>
                    <IngredientsContent>
                        <ListWrapper>
                            {props.data.ingredients.map(
                                (value,key) =>(
                                    <Lists key= {key}> 
                                        <CheckBox type="checkbox" onChange={() => handleCheck(key)} name="ingredients" checked={checked[key]} />
                                        <LabelList checked = {checked[key]}> {value} </LabelList>
                                    </Lists>
                                )
                            )}
                        </ListWrapper>
                    </IngredientsContent>
                </IngredientsWrapper>
                <DirectionsWrapper>
                    <Directions>Directions</Directions>
                    <DirectionsContent>
                    <div>
                            {props.data.directions.map(
                                (value,key) =>(
                                    <div key= {key} style = {{marginBottom : '20px',display : 'flex',alignItems: 'center'}}> 
                                        <Box>{key+1}</Box>
                                        <DirectionList>{value} </DirectionList>
                                    </div>
                                )
                            )}
                        </div>
                    </DirectionsContent>
                </DirectionsWrapper>
                
            </Wrapper>
        );

    
}
export default CheckOut;