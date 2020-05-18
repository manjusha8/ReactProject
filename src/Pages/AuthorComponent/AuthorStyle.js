import styled from 'styled-components';


export const Wrapper = styled.div`

`;

export const Author = styled.div`
    display : flex;
    justify-content : space-around;
`;

export const AuthorName = styled.div`
    width : 100px;
    display : inline-block;
`;

export const AuthorPic = styled.div`
    display : inline-block;
`;

export const Type = styled.div`
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${props=> props.theme.backgroundColor};
`;

export const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #606060;
`;

export const Email = styled.div`
    color: ${props=> props.theme.primaryColor};
    margin: 5px 0 0;
    cursor: pointer;
`;

export const About = styled.div`
    margin: 10px 0 0;
    line-height: 24px;
    color: ${props=> props.theme.primaryColor};
`;
