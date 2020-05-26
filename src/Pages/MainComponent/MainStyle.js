import styled from 'styled-components';

export const MainContentWrapper = styled.div`
    max-width : 960px;
    margin : 20px auto;
    padding : 0;
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
    line-height:34px;
    font-size: 22px;
    padding-right : 10px;
`;

export const Buttons = styled.div`
    margin: 25px 0;
`;

export const ListButton = styled.button`
    background-color : ${props => props.state ? props.theme.backgroundColor : null};
    border : none ;
    padding : 12px 15px;
    border-radius : 5px;
    width : 100px;
    outline : none;
`;

export const GridButton = styled.button`
    background-color : ${props => props.state ? props.theme.backgroundColor : null};
    border : none;
    padding : 12px 15px;
    border-radius : 5px;
    width : 100px;
    outline : none;
`;

export const BreakThrough = styled.hr`
    background-color : #606060;
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