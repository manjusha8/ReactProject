import React, { Component} from 'react';
// import sliderA_01 from '../../images/sliderA_01.jpg';
import {Wrapper,BannerOverlay,Image ,Button,  BannerWrapper,BannerContent,IconText,Icons,RecipieBtn,ViewRecipieBtn,Text} from './Style'
import {FaClock ,FaUser ,FaUtensils } from 'react-icons/fa';
// import {browseHistory} from 'react-router';
// import createHistory from 'history/createBrowserHistory'
// import { Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function BannerImage(props) {

    const onNavigateHandler = (data) =>
    {
        props.history.push({
            pathname : "/viewrecipe",
            state: {
              data: data
            }
          });
          console.log("navigateToRecipe",data);
    }

        return(
            <Wrapper>
                <BannerWrapper>
                    <Image src={props.selectedBannerItem.imgUrl} alt="banner image" />
                </BannerWrapper>
                <BannerOverlay>
                </BannerOverlay>

                <BannerContent>
                    <RecipieBtn>{props.selectedBannerItem.title}</RecipieBtn>
                    <Text>{props.selectedBannerItem.recipe}</Text>
                    <ViewRecipieBtn><Button onClick={() => onNavigateHandler(props.selectedBannerItem)}>VIEW RECIPIE</Button></ViewRecipieBtn>
                    <Icons>
                    <FaUtensils color = {'white'}/> <IconText>${props.selectedBannerItem.servings} servings</IconText>
                    <FaClock color = {'white'}/><IconText>{props.selectedBannerItem.prepTime}</IconText>
                    <FaUser color = {'white'}/><IconText>{props.selectedBannerItem.author}</IconText>
                    </Icons>
                </BannerContent>


            </Wrapper>
            
        );

}

export default withRouter(BannerImage);