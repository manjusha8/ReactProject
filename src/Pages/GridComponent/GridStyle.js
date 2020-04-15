import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width : 960px;
    margin : 0 auto;
    display : flex;
    flex-wrap : wrap;
    height : 100%;

    /* display: grid;
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    /* max-width: 500px; */
    /* max-width : 960px;
    margin : 0 auto; */ 
`;

export const CardWrapper = styled.div`
    width : 225px;
    margin : 0 20px 20px 0;
    height : 100%;
`;

export const ImageWrapper = styled.div`
    width : 225px;
    height:30%;
    /* background: rgba(0, 151, 19, 0.1);   */
    position : relative;    

    /* &:hover {
        background: rgba(0, 0, 0, 0.1);      
        /* opacity : 0.1; */
    } */
`;

export const ViewButtonWrapper = styled.div`
    width : 225px;
    height:98%;
    position : absolute;
    top : 0;
    background: rgba(0, 0, 0, 0.5);  
`;

export const ContentWrapper = styled.div`
    color : #606060;
    background-color : #f8f8f8;
    padding : 20px 25px;
    margin-top: -5px;
    line-height: 26px;
    height : 70%;
`;

export const Title = styled.div`
       line-height: 26px;

`;

export const Content = styled.div`
     
`;

export const Ratings = styled.div`
     text-align : left;
     line-height: 26px;

`;

export const Time = styled.div`
     text-align : right;
     font-size: size 12;
     color : '#909090';
     

`;

// export const TimeValue = styled.span`
//      padding-left : -3px 0  0 5px;

// `;


