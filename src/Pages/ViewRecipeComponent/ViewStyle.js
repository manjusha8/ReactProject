import styled from 'styled-components';

export const Wrapper = styled.div`
     text-align : center;
`;

export const ViewButtonWrapper = styled.div`
    width : 100%;
    height : 100%;
    margin-top : 60px;
    transition: all 200ms ease-in-out;
`;

export const Button = styled.button`
    /* border : 1px solid ${props=> props.theme.color}; */
    border: none;
    padding : 20px;
    color : ${props=> props.theme.color};
    background: rgba(0, 0, 0, 0.5);  
    outline : none;


`;

