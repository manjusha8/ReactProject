import React from 'react';
import {Wrapper,AuthorName,Author,AuthorPic,Name,Type,Email,About} from './AuthorStyle';
import author from '../../assests/images/author.jpg';

function AuthorBox(props){



    return (

        <Wrapper>
            <Author>
                <AuthorName>
                    <Type>AUTHOR</Type>
                    <Name>SANDRA FORTIN</Name>
                </AuthorName>
                <AuthorPic>
                    <img src={author} alt = "author" style = {{borderRadius : '50%' , width : '60px'}}/>
                </AuthorPic>
            </Author>
            <Email>sandra@chow.com</Email>
            <About>
            I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.
            </About>
        </Wrapper>
    );

}

export default AuthorBox;