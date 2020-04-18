import styled from 'styled-components';

export const MainContentWrapper = styled.div`
    max-width : 960px;
    margin : 20px auto;
    padding : 0;
    /* width : 100px; */
    /* position : relative; */
    display : flex;
    justify-content : space-between;
`;

export const Tables = styled.div`


`;

export const CardWrapper = styled.div`


`;

export const Cards = styled.div`


`;

export const LatestRecipes = styled.span`
   color : #606060;
   font-family: 'Open Sans',helvetica;
   text-align:left;
    /* width:110px; */
    line-height:34px;
    /* font-weight :22px; */
    font-size: 22px;
    padding-right : 10px;
`;

export const Buttons = styled.div`
    /* position : absolute;
    right: 35px;
    top: 75px; */
    margin: 25px 0;
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
    /* width : 500px; */
    background-color : #606060;

    /* display : inline-block */
`;

export const LeftWrapper = styled.div`


`;

export const RightWrapper = styled.div`

    margin-right : 20px;
`;

export const SearchWrapper = styled.div`


`;

export const AuthorWrapper = styled.div`

    border : 1px solid #e8e8e8;
    margin-top: 95px;
    width: 185px;
    padding: 28px 25px;
`;