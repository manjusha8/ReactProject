import styled from 'styled-components';

export const Wrapper= styled.div`
    max-width : 960px;
    margin : 50px auto;
    /* display: flex;
    justify-content: space-around; */
    color: #606060;
    font-size: ${props=> props.theme.fontSize};
    font-weight: 600;
`;

export const ContentWrapper= styled.div`
    text-align: center;
     margin-top: 50px;
`;