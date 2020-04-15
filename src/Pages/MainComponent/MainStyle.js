import styled from 'styled-components';

export const MainContentWrapper = styled.div`
    max-width : 960px;
    margin : 20px auto;
    padding : 0;
    /* width : 100px; */
    position : relative;
`;

export const LatestRecipes = styled.td`
   color : #606060;
   font-family: 'Open Sans', sans-serif,helvetica;
   text-align:left;
    width:110px;
    line-height:34px;
    font-weight :22px;
    padding-right : 10px;
`;

export const Buttons = styled.div`
    position : absolute;
    right: 35px;
    top: 75px;
`;

export const ListButton = styled.button`
    background-color : ${props => props.state ? '#8dc63f' : null};
    border : none ;
    padding : 12px 15px;
`;

export const GridButton = styled.button`
    background-color : ${props => props.state ? '#8dc63f' : null};
    border : none;
    padding : 12px 15px;
`;

export const BreakThrough = styled.hr`
    
    /* align-items: center; */
    width : 500px;
    background-color : #606060;

    display : inline-block
`;