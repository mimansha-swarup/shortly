import styled from "styled-components";
import bg  from  "../assets/bg-boost-desktop.svg"

const BgCont = styled.div`
    background-color:${({theme})=>theme.colors.primary.DarkViolet};
    /* background-color:#3b3054; */
    background: url(${bg}) center no-repeat ;
    background-size: cover;
    
    height: 40vh;
    max-height: fit-content;
    padding:0;
    margin:0;
    align-items: center;
    div{
        height: 40vh;
        align-items: center;
        background-color:rgb(59, 48, 84,.9);
        
    }
    `;
const BoostHeading = styled.h2`
    margin:0 0 2rem;
    color: #fff;
    padding-top: 5rem;
    text-align: center;

`;

const BigPrimaryButton = styled.button`
padding: 1rem 2.5rem;
background-color: ${({theme}) =>theme.colors?.primary.Cyan};
color: #fff;
font-weight: 700;
cursor: pointer;
border-radius: 2rem;
border:none;
font-size: 1.2rem;
margin-bottom: 4.5rem ;

&:hover{
  background-color:  ${({theme}) =>theme.colors?.hover};
}
`;

export {BgCont,BoostHeading,BigPrimaryButton};