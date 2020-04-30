import styled from 'styled-components';

export const Wrapper = styled.div`
    position : relative;
    max-width : 960px;
    margin : 0 auto;
    padding: 0;
    width : 700px;
`;

export const Folded = styled.div`
    content: "";
    width : 500px;
    /* border : 3px solid black; */
    position: absolute;
    top: 0%;
    right: 0%;
    width: 0px;
    height: 0px;
    border-top: 48px solid transparent; 
    border-left: 48px solid #e0e0e0 ;
`;

export const Header = styled.div`
    padding: 15px 15px;
    background: #f8f8f8;`;

export const Title = styled.h2`
    font-size: 30px;
    font-family: arvo;
    line-height: 36px;
    color: #606060;
    font-weight: 500;
    margin : 0;
`;

export const Ratings = styled.div`
    display : inline-block;
`;

export const Reviews = styled.div`
    display : inline-block;
    color : #909090;
    cursor : pointer;
`;

export const ImageWrapper = styled.div`
    width : 100%;
    height : 400px
`;


export const InfoWrapper = styled.div`
    background-color: #f8f8f8;
    padding: 20px 15px 20px 20px;
    display : flex;
    justify-content : space-between;
    margin-top: -5px;
`;

export const Infomartion = styled.div`
    display : inline-block;
    border-right : 1px solid #d8d8d8;
    padding : 0 10px;
`;

export const Heading = styled.div`
    color : #808080;
`;

export const Detail = styled.div`
    font-weight: 600;
    color: #707070;
`;

export const LeftDiv = styled.div`
`;

export const RightButton = styled.div`
    
`;

export const Print = styled.button`
    background-color : #8dc63f;
    color : white;
    text-align:center;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 15px;
    border : none;
    cursor: pointer;
`;





export const BasicContent = styled.div`
    color : gray;
    line-height: 24px;
    line-height : 24px;
    padding : 15px 0;
    font-size: 100%;
`;




export const IngredientsWrapper = styled.div`
    
`;

export const Ingredients = styled.h3`
    font-size: 22px;
    line-height: 34px;
    color: #606060;
    margin: 0;
    font-weight: 500;
`;


export const IngredientsContent = styled.div`
    
`;

export const ListWrapper = styled.ul`
    list-style-type : none;
`;

export const Lists = styled.li`
    color : gray;
`;

export const CheckBox = styled.input`
        background-color : ${props => props.checked === true ? "#8DC63F" : null}; 
        color : ${props => props.checked === true ? "white" : null};
        background-color : #8dc63f;

    

`;

export const LabelList = styled.label`
    color : gray;
    text-decoration: ${props => props.checked === true ? "line-through" : "none"};

`;

export const DirectionsWrapper = styled.div`
    
`;

export const Directions = styled.h3`
    font-size: 22px;
    line-height: 34px;
    color: #606060;
    font-weight: 500;
`;

export const DirectionsContent = styled.div`
    margin-left  :35px;
`;

export const Box = styled.div`
    /* border : 1px solid black; */
    /* background-color: #f8f8f8; */
    /* width : 35px; */
    padding : 1px 10px;
    display : inline-block;
    text-align: center;
    line-height: 32px;
    color: #999;
    font-weight: 700;
    font-size: 16px;
    background-color: #f4f4f4;
    margin : 0;
`;

export const DirectionList = styled.div`
    display: inline-block;
    padding: 8px 14px;
    line-height: 24px;
    color : #808080;
`;