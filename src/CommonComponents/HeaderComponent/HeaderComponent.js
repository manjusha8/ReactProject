import React, { useState } from 'react';
import { Items , Lists , HeaderDiv ,BannerImage,Link , ListItems, Hover} from './HeaderStyle';
import logo from '../../assests/images/logo.jpg';

function HeaderComponent() {
    // ['home','Demo','Recipes','Pages','Shop','Submit Recipe']
    const [names, setNames] = useState( 
        [
            {header : 'home' , url : ('/home'), active: true},
            {header : 'Demo' , url : ('/demo'), active: false},
            {header : 'Recipes' , url : ('/viewrecipe'), active: false},
            {header : 'Logout' , url : ('/logout'), active: false},
            {header : 'Shop' , url : ('/shop'), active: false},
            {header : 'Submit Recipe' , url : ('/submitrecipe'), active: false}
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
                    <ListItems active= {names.active}> 
                        <Link active= {names.active} href ={names.url}>{names.header}</Link>
                    </ListItems>
                    ))}
                </Items>
            </Lists>
        </HeaderDiv>

    )
}
export default HeaderComponent;