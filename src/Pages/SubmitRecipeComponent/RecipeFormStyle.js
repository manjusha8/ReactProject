import styled from 'styled-components';

export const Forms= styled.form`
    max-width: 960px;
    margin: 0 auto;
`;

export const TitleInput= styled.input`
    width: 100%;
    font-size: 14px;
    padding: 14px 15px 12px;
    line-height: 24px;
    height: 52px;
    box-sizing: border-box;
    color: #777;
    margin: 0;
`;

export const FoodTypes= styled.select`
    width: 100%;
    color: #909090;
    font-size: 14px;
    padding: 10px 15px 10px 10px;
    line-height: 24px;
    height: 40px;
    box-sizing: border-box;
    /* color: #777; */
`;

export const Options= styled.option`
    padding: 10px 0px;
    &:hover{
        background-color:${props=> props.theme.backgroundColor};
    } 
`;

export const DescriptionInput= styled.input`
    width: 100%;
    font-size: 14px;
    padding: 14px 15px 12px;
    line-height: 24px;
    height: 70px;
    box-sizing: border-box;
    color: #777;
    margin: 0;
`;

export const Wrapper= styled.div`
    width: 100%;
    height: 45px;
    background-color: #f8f8f8;
    padding: 10px;
    /* display: flex;
    justify-content: space-around; */
    position: relative;
`;

export const PlusIcon= styled.div`
    /* display: inline-block; */
    position: absolute;
    width: 20px;
    font-size: 16px;
    color: #a0a0a0;
    background-color: #eee;
    padding: 11px 13px;
    margin: 0;
    left: 20px;
`;

export const IngredientName= styled.div`
    /* display: inline-block; */
    position: absolute;
    left: 150px;
`;

export const IngredientType= styled.div`
    /* display: inline-block; */
    position: absolute;
    right: 150px;
`;

export const TimesIcon= styled.div`
    /* display: inline-block; */
    position: absolute;
    width: 20px;
    font-size: 16px;
    color: #a0a0a0;
    background-color: #eee;
    padding: 11px 13px;
    margin: 0;
    right: 20px;
`;

export const IngName= styled.input`
    height: 20px;
    padding: 10px 12px;
    width: 250px;
`;

export const IngType= styled.input`
    height: 20px;
    padding: 10px 12px;
    width: 250px;

`;

export const InputWrapper= styled.div`
    width: 100%;
    padding: 10px;
`;

export const Label= styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: #909090;
`;

export const Input= styled.input`
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    color: #777;
`;

export const Text= styled.h4`
    font-size: 18px;
    line-height: 30px;
    color: #606060;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const UploadButton = styled.button`
    margin: 20px 0 0 50px;
    border-radius : 3px;
    background-color: #8dc63f;
    color: white;
    outline: none;
    border: none;
    /* border-radius: 20px; */
    width: 150px;
    height: 45px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

`;
