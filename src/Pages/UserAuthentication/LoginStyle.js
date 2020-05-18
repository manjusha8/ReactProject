import styled from 'styled-components';

export const Forms = styled.form`
    display: block;
`;

export const Text = styled.div`
    font-size: 18px;
    color: #999999;
    line-height: 1.2;
    padding-left: 2px;
    font-weight: 700;
`;

export const Error = styled.div`
    color: red;
    margin-bottom: 25px;
`;


export const Input = styled.input`
    margin: 25px 0px;
    display: inline-block;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #a0a0a0;
    width: 100%;
    font-weight: 500;
    color: #a0a0a0;
    outline: none;
    padding-bottom: 15px;
    line-height: 24px;
    font-family: 'Open Sans', sans-serif,helvetica;
    font-size: 16px;
`;

export const Toggle = styled.span`
    position: absolute;
    top: 35px;
    left: 85%;
    color: rgb(141, 198, 63);
    cursor: pointer;
`;