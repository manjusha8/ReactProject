import React, { useState } from 'react';
import { Items , Lists , HeaderDiv ,BannerImage,Link , ListItems, Hover} from './HeaderStyle';
import logo from '../../assests/images/logo.jpg';

function HeaderComponent() {
    const [names] = useState( 
        [
            {header : 'home' , url : ('/home'), active: true},
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
                    {names.map((names, key) => (
                    <ListItems key= {key} active= {names.active}> 
                        <Link active= {names.active} href ={names.url}>{names.header}</Link>
                    </ListItems>
                    ))}
                </Items>
            </Lists>
        </HeaderDiv>

    )
}
export default HeaderComponent;