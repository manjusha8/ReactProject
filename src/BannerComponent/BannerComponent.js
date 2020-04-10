import React , {useState} from 'react';
import {BannerImage , Buttons ,ButtonsDivision , BannerComp} from './Banner';
import sliderA_01 from '../images/sliderA_01.jpg';

function BannerComponent()
{
    const [names, setNames] = useState(['Mexican Grilled Corn Receipe', 'Roast Chicken With Lemon Gravy', 'Avocado Melon Salad With Lime Vinaigrette','Chunky Beef Stew']);

    return (

        <BannerComp style = {{fontFamily: 'Open Sans,helveticaneue'}}>
            <BannerImage >
            <img src={sliderA_01} alt="mexican corn grilled" style ={{width: '100%'}}/>
            </BannerImage>

            <ButtonsDivision>
                {names.map(names => ( <Buttons >{names}</Buttons>))}
                
            </ButtonsDivision>
        </BannerComp>


    )
}

export default BannerComponent;