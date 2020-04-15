import React, { useState } from 'react';
import { Items , Lists , HeaderDiv ,BannerImage,Link , ListItems} from './HeaderStyle';
import logo from '../../assests/images/logo.jpg';

function HeaderComponent() {
    const [names, setNames] = useState(['Home', 'Demo', 'Recepies', 'Pages', 'Shop', 'SubmitRecepie']);
    return (
        <HeaderDiv >
            <BannerImage >
            <img src={logo} alt="Logo" />
            </BannerImage>
            <Lists >
                <Items >
                    {names.map(names => (<ListItems><Link href ='#'>{names}</Link></ListItems>))}
                </Items>
            </Lists>
        </HeaderDiv>

    )
}
export default HeaderComponent;