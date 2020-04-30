import styled from 'styled-components';



export const Wrapper= styled.div`
    max-width: 960px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
`;

export const LeftWrapper= styled.div`
`;

export const RightWrapper= styled.div`
    margin : 30px;
`;

export const ImageWrapper= styled.div`
    overflow: hidden;
    height: 500px;
    width: 500px;
`;

export const SignUpButton= styled.button`
    padding: 10px;
    margin: 15px;
    display: inline-block;
    border-radius : 3px;
    background-color: ${props => props.clicked ? '#8dc63f' : null};
    color: ${props => props.clicked ? 'white' : 'black'};
    outline: none;
`;

export const LoginButton = styled.button`
    padding: 10px;
    margin: 15px;
    display: inline-block;
    border-radius : 3px;
    background-color: ${props => props.clicked ? '#8dc63f' : null};
    color: ${props => props.clicked ? 'white' : 'black'};
    outline: none;
`;