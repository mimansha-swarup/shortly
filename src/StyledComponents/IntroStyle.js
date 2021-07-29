import styled from "styled-components"

const  IntroBox = styled.div`
    color: ${({theme})=>theme.colors.neutral.Gray};
    margin: 0 0 0 9rem ;
    height: fit-content;
    min-height: 100vh;
    align-items: flex-start;
`;

const Heading = styled.p`
    color: ${({theme})=>theme.colors.neutral.VeryDarkBlue};
    /* color: #232127; */
    font-weight: 700;
    font-size: clamp(3rem,5vw,4rem);
    margin:0;
    padding-top: 3rem;
    word-wrap: break-word;
    width:480px;

`;
const ImgCont = styled.div`

position: absolute;
right: -10%;
/* top: 25%; */

img{
    width :clamp(533px,100%,733px);
}

`;
const Description = styled.p`
word-wrap: break-word;
width:480px;
font-size:18px;
color: ${({theme})=>theme.colors.neutral.GrayishViolet};
line-height: 2rem;
margin: 2.5rem 0;
`;

export {Heading,ImgCont,Description,IntroBox};