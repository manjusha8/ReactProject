import React, { Component} from 'react';
// import sliderA_01 from '../../images/sliderA_01.jpg';
import {Wrapper,BannerOverlay,Image ,Button,  BannerWrapper,BannerContent,IconText,Icons,RecipieBtn,ViewRecipieBtn,Text} from './Style'
import {FaClock ,FaUser ,FaUtensils } from 'react-icons/fa';


function BannerImage(props) {

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
                    <ViewRecipieBtn><Button>VIEW RECIPIE</Button></ViewRecipieBtn>
                    <Icons>
                    <FaUtensils color = {'white'}/> <IconText>${props.selectedBannerItem.servings} servings</IconText>
                    <FaClock color = {'white'}/><IconText>{props.selectedBannerItem.prepTime}</IconText>
                    <FaUser color = {'white'}/><IconText>{props.selectedBannerItem.author}</IconText>
                    </Icons>
                </BannerContent>


            </Wrapper>
            
        );

}

export default BannerImage;