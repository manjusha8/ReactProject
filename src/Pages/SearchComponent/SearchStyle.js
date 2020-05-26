import styled from 'styled-components';

export const InputBox= styled.input`
    display : inline-block;
    padding : 12px 15px;
`;

export const Search= styled.div`
    padding : 12px;
`;

export const SearchIcon= styled.div`
    background-color : ${props=> props.theme.backgroundColor};
     width: 44px;
     display: inline-block;
     cursor: pointer;
     height: 44px;
`;