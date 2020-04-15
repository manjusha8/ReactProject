import React,{useState} from 'react';
import {CardWrapper , ImageWrapper , ViewButtonWrapper, Wrapper,ContentWrapper , Title , Content , Ratings , Time} from './GridStyle';
import StarComponent from '../StarComponent/StarComponent';
import ViewButton from '../ViewRecipeComponent/ViewButton';
import {FaClock} from 'react-icons/fa';

function GridCard(props){

    const [isShown, setIsShown] = useState(false);


 



return (
    <Wrapper>
        {props.value.map ( value => (
            <CardWrapper>
                <ImageWrapper>
                    
                    <img src = {value.imgUrl} onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style = {{width : '100%' , height :'100%'}}/>

                    {isShown ? 
                    <ViewButtonWrapper ><ViewButton /> </ViewButtonWrapper>
                 : null}

                </ImageWrapper> 
                
                <ContentWrapper>
                    <Title>{value.recipe} <hr/></Title>
                    <Content>
                        <Ratings><StarComponent starValue = {value.ratings}/></Ratings>
                        <Time><FaClock color={ "#909090" } padding = {'0 5px 0 0'}/>{value.prepTime}</Time>
                    </Content>
                </ContentWrapper>
            </CardWrapper>
        ))}
        
    </Wrapper>


        );

}
export default GridCard;