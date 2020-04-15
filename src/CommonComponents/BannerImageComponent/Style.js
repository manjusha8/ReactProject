import styled from 'styled-components';


export const Wrapper = styled.div`
    position:relative;
`;


export const BannerOverlay = styled.div`
/* height: 415px; */
/* margin-top:80px; */
background: #333;
width: 100%;
position: absolute;
display: block;
opacity: 0.5;
top:0;
`;

export const BannerWrapper = styled.div`
    height: 415px;
    /* // margin-top:80px;
    position:relative; */
`;


export const BannerContent = styled.div`
    position: absolute;
    top: 60px;
    /* bottom : 0; */
    left : 100px;
    /* right : 0; */
    width : 60%;
    text-align : left !important ;
    /* padding: 60px 50px; */
    /* height: 100px; */
`;


export const Icons = styled.div`
    /* position:absolute;
    bottom: -110px; */
    margin : 20px 0;


`;

export const IconText = styled.span`
    font-size:13px;
    color:white;
    font-weight:bold;
    /* padding: 0px 25px 0px 10px; */

`;

export const RecipieBtn = styled.div`
    /* display: inline-block; */
    background-color: #8DC63F;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 0;
    width: 70px;
    border: none;
    /* padding : 10px; */
    text-align: center;
`;

export const Text = styled.div`
    color:#fff;
    font-size: 50px;
    margin : 20px 0;
    /* padding: 20px 0px; */
    /* width:60%; */
`;

export const Button = styled.div`
`;

export const ViewRecipieBtn = styled.button`
    border: 3px solid #fff;
    /* display: inline-block; */
    background-color: rgba(255,255,255,.2);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 0;
    width: 130px;
    /* text-align: center; */
`;

export const Image = styled.img`
    height:100%;
    width:100%;

`;