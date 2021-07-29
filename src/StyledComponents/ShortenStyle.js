import styled from "styled-components";
import ShortenImgBg from "../assets/bg-shorten-desktop.svg"

const ShorterCont = styled.div`
background: linear-gradient(180deg, #fff 50%,#bfbfbf 50%) ;
/* background:red; */
/* 0 rem  */
padding: 1rem 0;
`;
const InputCont = styled.div`
background: url(${ShortenImgBg}) center center no-repeat ;
background-size: cover;
background-color: ${({theme}) =>theme.colors?.primary.DarkViolet};
padding: 3rem;
border-radius: .3rem;
align-items: center;
justify-content: center;
display: flex;
margin: 0 9rem;
`;
const Input = styled.input`
    padding: 1rem 2rem;
    font-size: 18px;
    width: 60%;
    border-radius:.5rem;
    font-weight: 700;
    outline: none;
    border :1px solid #35323e;

`;
const NotRoundedPrimaryButton = styled.button`
    padding: 1rem 2.5rem;
    background-color: ${({theme}) =>theme.colors?.primary.Cyan};
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    border-radius:.5rem;
    border:none;
    font-size: 1.2rem;
    margin:  0 1.5rem ;

    &:hover{
    background-color:  ${({theme}) =>theme.colors?.hover};
    }
`;
const LinkButton = styled.button`
align-self: center;
    padding: 0.5rem 1.3rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    border: none;
    width: 6rem;
    background-color: ${({theme}) =>theme.colors?.primary.Cyan};
    border-radius:.3rem;
    content: "Copy";
    margin: 0 0.5rem;
    
    &:hover{
        background-color:  ${({theme}) =>theme.colors?.hover};
    }
    &::before{
        content: "Copy";
    }
    &:focus::before{
        content: "";
    }
    &:focus::after{
        content: "Copied!";
        background-color: ${({theme}) =>theme.colors?.primary.DarkViolet};
    }
    &:focus{
        background-color: ${({theme}) =>theme.colors?.primary.DarkViolet};
    }
`;
const GreyBox = styled.div`
    background-color: ${({theme}) =>theme.colors?.neutral.Gray};
    height: fit-content;
    padding: 1rem 9rem;
`;
const LinkBox = styled.div`

    background-color: #fff;
    height: fit-content;
    padding: .5rem 1rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
`;
const ShortenLink = styled.p`
   color: ${({theme}) =>theme.colors?.primary.Cyan};
    
`;


export {ShorterCont,InputCont,Input,NotRoundedPrimaryButton,LinkButton,GreyBox,LinkBox ,ShortenLink}