import styled from 'styled-components';

export const Items = styled.ul`
    list-style-type : none;

`;

export const Lists = styled.div`
    
    color: gray;
`;

export const HeaderDiv = styled.div`
    display : flex;
    justify-content : space-between;
    margin: 0 auto;
    max-width:960px;
    font-family: 'Open Sans,helveticaneue';
`;


export const BannerImage = styled.div`
    margin-top: 20px;
 `;

 export const Link = styled.a`
    text-decoration : none;
    text-decoration : none;
    color:gray;
    border-bottom: ${props=> props.active ? "10px solid " : 'none'};
    border-bottom-color: ${props=> props.theme.backgroundColor};
    padding-bottom: ${props=> props.active ? "30px" : "0"};

    &:hover {
        border-bottom: 10px solid ${props=> props.theme.backgroundColor};
        padding-bottom: 30px;
        
      }
    `;

export const ListItems = styled.li`
    display : inline-block;
    margin-left: 5px;
    line-height: 18px;
    padding: 15px 25px 25px;
    font-family: 'Open Sans','helveticaneue';
    color: ${props=> props.active ? 'black': 'none'}!important;

   
`;