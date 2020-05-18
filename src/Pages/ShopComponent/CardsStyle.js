import styled from 'styled-components';

export const CardWrapper= styled.div`
    
    width : 202px;
    margin : 0 15px 15px 0;
    height : 100%;
`;

export const Wrapper= styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width : 960px;
    margin : 0 auto;
`;

export const ImageWrapper= styled.div`
    height: 200px;
    position: relative;
`;

export const CartButton= styled.div`
    background-color: ${props=> props.theme.backgroundColor};
    position: absolute;
    bottom: 0;
    right: 0;
    display : ${props => props.active ? 'block' : 'none'};
    height: 30px;
    width: 30px;
`;

export const Image= styled.img`
    height: 100%;
    width: 100%;
`;

export const ContentWrapper= styled.div`
    padding: 16px;
    text-align: center;
    background-color: #f8f8f8;
    
`;

export const Category= styled.div`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #aaa;
`;

export const Title= styled.div`
    color: #707070;
    font-size: 16px;
    line-height: 24px;
`;

export const Price= styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #606060;
    padding: 1px 0 5px;
`;