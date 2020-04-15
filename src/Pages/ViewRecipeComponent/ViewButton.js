import React , {Component} from 'react';
import {Wrapper , ViewButtonWrapper , Button} from './ViewStyle';

class ViewButton extends Component {


    render()
    {
        return(
            <Wrapper>
                <ViewButtonWrapper>
                    <Button>VIEW RECIPE</Button>
                </ViewButtonWrapper>
            </Wrapper>
        );
    }
}

export default ViewButton;