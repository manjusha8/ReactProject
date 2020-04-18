import styled from 'styled-components';

export const Items = styled.ul`
    list-style-type : none;
/* margin :0 ; */
/* float:right; */
/* margin-left : 100px; */
/* justify-content : space-between; */
`;

export const Lists = styled.div`
    /* float : right; */
    /* margin: 0; */
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
    /* justify-content : space-between; */
    margin-top: 20px;
 `;

 export const Link = styled.a`
    text-decoration : none;
    /* border-bottom: 3px solid #8dc63f; */
    text-decoration : none;
    /* padding: 35px 0; */
    color:gray;
    &:hover {
        border-bottom: 10px solid #8DC63F;
        /* margin-bottom:-7px; */
        padding-bottom: 30px;
      }
    `;

export const ListItems = styled.li`
    display : inline-block;
    margin-left: 5px;
    /* font-size: 14px; */
    line-height: 18px;
    padding: 15px 25px 25px;
    font-family: 'Open Sans','helveticaneue';
    /* font-weight: 600; */
   
`;