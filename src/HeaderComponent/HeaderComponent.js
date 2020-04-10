import React, { useState } from 'react';
import { Items , Lists , HeaderDiv} from './HeaderStyle';
import logo from '../images/logo.jpg';

function HeaderComponent() {
    const [names, setNames] = useState(['Home', 'Demo', 'Recepies', 'Pages', 'Shop', 'SubmitRecepie']);
    return (
        <HeaderDiv style = {{display : 'flex' , margin: '0 10px',fontFamily: 'Open Sans,helveticaneue'}}>
            <div style = {{justifyContent : 'space-between' , marginTop: '20px'}}>
            <img src={logo} alt="Logo" />
            </div>
            <Lists style = {{float : 'right',margin: '0' ,color: 'gray'}}>
                <Items style = {{listStyleType : 'none' ,float:'right',margin : '0'}}>
                    {names.map(names => (<li style = {{display : 'inline-block' , marginLeft: '5px',fontSize: '14px',lineHeight: '18px',padding: '25px 19px 25px'}}><a href ='#' style = {{borderBottom: '3px solid #8dc63f' , textDecoration : 'none',padding: '22px 0',color:'gray'}}>{names}</a></li>))}
                </Items>
            </Lists>
        </HeaderDiv>

    )
}
export default HeaderComponent;