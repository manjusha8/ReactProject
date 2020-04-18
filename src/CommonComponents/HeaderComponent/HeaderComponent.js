import React, { useState } from 'react';
import { Items , Lists , HeaderDiv ,BannerImage,Link , ListItems} from './HeaderStyle';
import logo from '../../assests/images/logo.jpg';

function HeaderComponent() {
    // ['home','Demo','Recipes','Pages','Shop','Submit Recipe']
    const [names, setNames] = useState( 
        [
            {header : 'home' , url : ('/')},
            {header : 'Demo' , url : ('/demo')},
            {header : 'Recipes' , url : ('/viewrecipe')},
            {header : 'Pages' , url : ('/pages')},
            {header : 'Shop' , url : ('/shop')},
            {header : 'Submit Recipe' , url : ('/submitrecipe')}

        ]
        );
    return (
        <HeaderDiv >
            <BannerImage >
            <img src={logo} alt="Logo" />
            </BannerImage>
            <Lists >
                <Items >
                    {names.map(names => (
                    <ListItems>
                        <Link href ={names.url}>{names.header}</Link>
                    </ListItems>
                    ))}
                </Items>
            </Lists>
        </HeaderDiv>

    )
}
export default HeaderComponent;