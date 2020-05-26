import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Cart = styled.div`
  color: #606060;
  font-family: "Open Sans", helvetica;
  text-align: left;
  line-height: 34px;
  font-size: 22px;
  padding-right: 10px;
  display: inline-block;
`;

export const BreakThrough = styled.hr`
  background-color: #606060;
  
`;

export const CartWrapper = styled.div`
  width: 230px;
  background-color: #f2f2f2;
  padding: 8px 10px 30px 10px;
`;

export const ImageBlock = styled.div`
  display: inline-block;
`;

export const ImageWrapper = styled.li`
  height: 50px;
  width: 50px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const TitleBlock = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const Title = styled.div`
  color: #606060;
  font-size: 14px;
  font-weight: 600;
`;

export const Price = styled.div`
  font-size: 14px;
  color: #909090;
`;

export const SubtotalAmount = styled.div`
  padding: 14px;
`;

export const Subtotal = styled.span`
  color: #707070;
`;

export const SubtotalPrice = styled.span`
  color: #909090;
`;

export const ViewCart = styled.button`
    background-color: #a0a0a0;
    color: white;
    padding: 10px 14px;
    width: 90%;
    font-weight: 700;
    font-size: 13px;
    outline: none;
    cursor: pointer;
    margin-bottom: 15px;
`;

export const CheckOut = styled.button`
    background-color: ${props=> props.theme.backgroundColor};
    color: ${props=> props.theme.color};
    padding: 10px 14px;
    width: 90%;
    font-weight: 700;
    font-size: 13px;
    outline: none;
    cursor: pointer;
`;

export const CartEmpty = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #606060;
  text-transform: uppercase;
  text-align: center;
`;