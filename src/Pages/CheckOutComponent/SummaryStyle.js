import styled from 'styled-components';

export const MainWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    max-width : 960px;
    margin : 0 auto;

    /* margin : 0 auto;
    position : absolute;
    top : 160px ;
    left : 150px;
    z-index:0; */
`;

export const LeftWrapper = styled.div`
    position : absolute;
    top : 160px ;
    left : 150px;
    z-index:0;
`;

export const RightWrapper = styled.div`
    position : absolute;
    top : 400px ;
    right : 120px;
    z-index:0;
`;

export const AuthorWrapper = styled.div`
    border : 1px solid #e8e8e8;
    margin-top: 70px;
    width: 185px;
    padding: 28px 25px;
`;