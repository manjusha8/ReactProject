import React,{useState} from 'react';
import StarComponent from '../StarComponent/StarComponent';
import {FaClock , FaUtensils , FaUser} from 'react-icons/fa';
import ViewButton from '../ViewRecipeComponent/ViewButton';
import {Wrapper, CardWrapper , ImageWrapper , ViewButtonWrapper, ContentWrapper , DescriptionWrapper , Title , Description , FooterContent , Ratings , Icons, PrepTime,User, Utensils, IconText } from './ListStyle';
import {withRouter} from 'react-router-dom';

function ListCard (props){

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
    

    function clickHandler (id)
    {
        setIsShown(id);
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


return(

    <Wrapper>

        {value.map ( value => (
        <CardWrapper>

            <ImageWrapper onMouseOver={() => clickHandler(value.id)}>
                <img src = {imgUrl[value.id]} alt= "cards" style = {{width : '100%' , height :'100%'}}/>
                 
                <ViewButtonWrapper active= {value.id === isShown} ><ViewButton clicked = {() => navigateToRecipe(value)}/> </ViewButtonWrapper>
                
            </ImageWrapper>
            <ContentWrapper>
                <DescriptionWrapper>
                    <Title>{value.recipe}</Title>
                    <Description> Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.</Description>
                </DescriptionWrapper>
                <FooterContent>
                    <Ratings><StarComponent starValue = {value.ratings}/></Ratings>
                    <Icons>
                    <PrepTime><FaClock color = {'gray'}/><IconText>{value.prepTime}</IconText></PrepTime>
                    <User><FaUser color = {'gray'}/><IconText>{value.author}</IconText></User>
                    <Utensils><FaUtensils color = {'gray'}/> <IconText>${value.servings} servings</IconText></Utensils>
                    </Icons>
                </FooterContent>

            </ContentWrapper>
        
        </CardWrapper>
        ))}
    </Wrapper>
        
    );
    
};
export default withRouter(ListCard);