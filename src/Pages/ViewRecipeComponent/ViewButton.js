import React , {Component} from 'react';
import {Wrapper , ViewButtonWrapper , Button} from './ViewStyle';

function ViewButton(props){


    
        return(
            <Wrapper>
                <ViewButtonWrapper>
                    {/* <Button onClick = {() => props.clicked(props.data)}>VIEW RECIPE</Button> */}
                    <Button onClick = {props.clicked}>VIEW RECIPE</Button>
                </ViewButtonWrapper>
            </Wrapper>
        );

}

export default ViewButton;