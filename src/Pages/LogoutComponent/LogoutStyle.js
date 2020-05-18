import styled from 'styled-components';

export const HeaderWrapper= styled.div`
    width: 100%;
    height: 75px;
    background-color: #f2f2f2;
`;

export const Header= styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
    padding-top: 20px;
`;

export const ShopLeft= styled.div`
    font-size: 18px;
    font-weight: 500;
    color: #aaa;
    font-family: 'Open Sans','helveticaneue';
`;

export const ShopRight= styled.div`
    color: #909090;
    font-size: 13px;
    font-weight: 500;
`;

export const Button= styled.button`
    background-color: ${props=> props.theme.backgroundColor};
    color: white;
    font-size: ${props=> props.theme.fontSize};
    font-weight: bold;
    padding: 10px 0;
    width: 70px;
    border: none;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
`;
