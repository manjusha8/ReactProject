import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width : 960px;
    margin : 0 auto;
    display : flex;
    flex-wrap : wrap;
    height : 100%;

`;

export const CardWrapper = styled.div`
    width : 210px;
    margin : 0 20px 20px 0;
    height : 100%;
`;

export const ImageWrapper = styled.div`
    
    height: 225px;
    position: relative;    
    
`;

export const ViewButtonWrapper = styled.div`
    width : 210px;
    height:100%;
    position : absolute;
    top : 0;
    background: rgba(0, 0, 0, 0.5);  
    display : ${props => props.active ? 'block' : 'none'};
`;

export const ContentWrapper = styled.div`
    color : #606060;
    background-color : #f8f8f8;
    padding : 20px 25px;
    margin-top: -5px;
    line-height: 26px;
    height : 150px;

`;

export const Title = styled.div`
       line-height: 26px;
        text-align : center;
`;

export const Content = styled.div`
     
`;

export const Ratings = styled.div`
     text-align : left;
     line-height: 26px;

`;

export const Time = styled.div`
     text-align : right;
     font-size:  12px;
     color : '#909090';
     

`;



