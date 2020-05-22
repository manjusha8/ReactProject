import React from 'react';
import {Wrapper , ViewButtonWrapper , Button} from './ViewStyle';

function ViewButton(props){
        return(
            <Wrapper>
                <ViewButtonWrapper>
                    <Button onClick = {props.clicked}>VIEW RECIPE</Button>
                </ViewButtonWrapper>
            </Wrapper>
        );

}

export default ViewButton;