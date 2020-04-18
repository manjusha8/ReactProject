import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width : 960px;
    margin : 0 auto;
    /* display : flex;
    flex-wrap : wrap; */
    height : 100%;
`;

export const CardWrapper = styled.div`
    margin-top : 20px;
    display : flex;
    width: 680px;
`;

export const ImageWrapper = styled.div`
    width: 700px;
    position : relative;    
    display : inline-block;
`;

export const ViewButtonWrapper = styled.div`
    width : 200px;
    height:100%;
    position : absolute;
    top : 0;
    background: rgba(0, 0, 0, 0.5);  
`;

export const ContentWrapper = styled.div`
    display : inline-block;
    background-color: #f8f8f8;
    padding: 33px 35px 29px;

`;

export const DescriptionWrapper = styled.div`
    color:#606060;
`;

export const Title = styled.div`
    color:#606060;
    line-height: 28px;
    padding-bottom : 15px;
    font-size:22px;
    font-family: arvo;
    text-align : left;
`;

export const Description = styled.div`
    /* border-bottom: 1px solid #e5e5e5; */
    margin: 0 0 15px;
    padding: 0 0 22px;
    border-bottom: 1px solid #e5e5e5;
    text-align : left;
`;

export const FooterContent = styled.div`
    color:#606060;
    display:flex;
    justify-content : space-between;
`;

export const Ratings = styled.div`
    display:inline-block;
    width: 100px;
    
`;

export const Icons = styled.div`
    display:inline-block;
`;

export const PrepTime = styled.span`
    margin-left: 10px;
    /* display:inline-block; */
`;

export const User = styled.span`
    margin-left: 10px;
    /* display:inline-block; */
`;

export const Utensils = styled.span`
    margin-left: 10px;
    /* display:inline-block; */
`;

export const IconText = styled.span`
    padding-left : 5px; 
    color: #909090;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
`;