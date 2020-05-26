import styled from 'styled-components';

export const ReceipeWrapper = styled.div`
    width:950px;
    height:80px;
    margin: 0 auto;
    display:flex;
`;

export const Recipie = styled.div`
    border-left: 1px solid #e3e3e3;
    width:25%;
    height:100%;
    background-color:${props => props.active ? props.theme.backgroundColor : '#F2F2F2' };
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color:${props=> props.theme.backgroundColor};
    }
`;

export const RecipieText = styled.p`
    text-align: center;
    padding: 0 25px;
    color:${props => props.active ? 'white' : 'grey' };
    font-weight:bold;
    ${Recipie}:hover & {
        color: ${props=> props.theme.color};
      }
`;