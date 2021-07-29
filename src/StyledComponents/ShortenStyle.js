import styled from "styled-components";
import ShortenImgBg from "../assets/bg-shorten-desktop.svg"
import ShortenImgBgmob from "../assets/bg-shorten-mobile.svg"

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

@media (max-width: 768px) {
    background: url(${ShortenImgBgmob}) center center no-repeat ;
    background-size: cover;
    background-color: ${({theme}) =>theme.colors?.primary.DarkViolet};
    flex-direction: column;
    padding: 1.5rem 1rem;
    

  }

`;
const Input = styled.input`
    padding: 1rem 2rem;
    font-size: 18px;
    width: 60%;
    border-radius:.5rem;
    font-weight: 700;
    outline: none;
    border :1px solid #35323e;
    @media (max-width: 768px) {
        width:auto;
        padding: .5rem 2rem;
        margin: 1rem 0;
        
        
  }

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
    @media (max-width: 768px) {
        margin: 1rem 0;
        font-size: .8rem;
        padding: 1rem 3.5rem;
        width: 100%;

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
   @media (max-width: 768px) {
       width: 100%;
       margin: .5rem 0;
       padding: .8rem 0;
   }
`;
const GreyBox = styled.div`
    background-color: ${({theme}) =>theme.colors?.neutral.Gray};
    height: fit-content;
    padding: 1rem 9rem;
    @media (max-width: 768px) {
        padding: 1rem 0;
        /* margin: 1rem 0; */
    }

`;
const LinkBox = styled.div`

    background-color: #fff;
    height: fit-content;
    padding: .5rem 1rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    p{
        white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  width: 280px;
    }
    div{
        align-self: center;
    }
    @media (max-width: 768px) {
        
        align-self: center;
        width: auto;
        margin: 0 1.5rem;
        margin-bottom: .5rem;
        padding: 0.5rem ;
        flex-direction: column;
        div{
            flex-direction: column;
            align-self: flex-start;
            width: 100%;

        }
    }
`;
const ShortenLink = styled.input`
   color: ${({theme}) =>theme.colors?.primary.Cyan};
   font-size: 16px;
   border: none;
   padding: .5rem 0;
   outline: none;
   @media (max-width: 768px) {
       border-top: 1px solid #c4c4c4;
       margin: 1rem 0;

   }
  
    
`;


export {ShorterCont,InputCont,Input,NotRoundedPrimaryButton,LinkButton,GreyBox,LinkBox ,ShortenLink}