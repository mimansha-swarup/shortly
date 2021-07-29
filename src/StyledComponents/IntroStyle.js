import styled from "styled-components"

const  IntroBox = styled.div`
    color: ${({theme})=>theme.colors.neutral.Gray};
    margin: 0 0 0 9rem ;
    height: fit-content;
    min-height: 100vh;
    align-items: flex-start;
    @media (max-width: 768px) {
    margin: 0 0 0 0rem ;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    /* width: 80%; */
}
`;

const Heading = styled.p`
    color: ${({theme})=>theme.colors.neutral.VeryDarkBlue};
    /* color: #232127; */
    font-weight: 700;
    font-size: clamp(2.2rem,5vw,4rem);
    margin:0;
    padding-top: 3rem;
    word-wrap: break-word;
    width:clamp(250px,50vw,480px);

`;
const ImgCont = styled.div`

position: absolute;
right: -10%;

img{
    width :clamp(400px,50vw,733px);
}
@media (max-width: 768px) {
    position: relative;
    margin: 2rem 0 0 0;
    transform: translate(10%);
 
}

`;
const Description = styled.p`
word-wrap: break-word;
width:clamp(250px,50vw,480px);
font-size:clamp(12px,2vw,18px);
color: ${({theme})=>theme.colors.neutral.GrayishViolet};
line-height: 2rem;
margin: 2.5rem 0;
`;

export {Heading,ImgCont,Description,IntroBox};