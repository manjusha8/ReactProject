import styled from 'styled-components';


export const Wrapper = styled.div`
    position: relative;
`;


export const BannerOverlay = styled.div`

    background: #333;
    width: 100%;
    position: absolute;
    display: block;
    opacity: 0.5;
    top:0;
`;

export const BannerWrapper = styled.div`
    height: 415px;
    
`;


export const BannerContent = styled.div`
    position: absolute;
    top: 60px;
    left : 100px;
    width : 60%;
    text-align : left !important ;
    
`;


export const Icons = styled.div`
    margin : 20px 0;
`;

export const IconText = styled.span`
    font-size:13px;
    color:white;
    font-weight:bold;
`;

export const RecipieBtn = styled.div`
    background-color: ${props=> props.theme.backgroundColor};
    color: white;
    font-size: ${props=> props.theme.fontSize};
    font-weight: bold;
    padding: 10px 0;
    width: 70px;
    border: none;
    text-align: center;
`;

export const Text = styled.div`
    color:#fff;
    font-size: 50px;
    margin : 20px 0;
    
`;

export const Button = styled.div`
    outline : none;
`;

export const ViewRecipieBtn = styled.button`
    border: 3px solid #fff;
    background-color: rgba(255,255,255,.2);
    color: #fff;
    font-size: ${props=> props.theme.fontSize};
    font-weight: 700;
    padding: 10px 0;
    width: 130px;
`;

export const Image = styled.img`
    height:100%;
    width:100%;

`;