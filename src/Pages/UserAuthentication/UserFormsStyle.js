import styled from 'styled-components';



export const Wrapper= styled.div`
    width: 100%;
    display: flex;
`;

export const LeftWrapper= styled.div`
    width: 60%;
    background-size: cover;

`;

export const RightWrapper= styled.div`
    width: 40%;
    box-sizing: border-box;
    padding: 20px;
`;

export const ImageWrapper= styled.div`
    overflow-y: hidden;
`;

export const SignUpButton= styled.button`
    display: inline-block;
    border-radius : 20px;
    background-color: ${props => props.clicked ? '#8dc63f' : null};
    color: ${props => props.clicked ? 'white' : 'black'};
    outline: none;
    border: none;
    width: 150px;
    height: 45px;
    font-size: 15px;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
`;

export const LoginButton = styled.button`
    margin: 20px 0 0 50px;
    display: inline-block;
    border-radius : 3px;
    background-color: ${props => props.clicked ? '#8dc63f' : null};
    color: ${props => props.clicked ? 'white' : 'black'};
    outline: none;
    border: none;
    border-radius: 20px;
    width: 150px;
    height: 45px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

`;