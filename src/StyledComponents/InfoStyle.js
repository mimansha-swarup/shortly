import styled from "styled-components"

const  InfoBox = styled.div`
background-color: ${({theme})=>theme.colors.neutral.Gray};
padding: 2rem 0 5rem 0;
margin: 0;
height: fit-content;
min-height: calc(100vh + 20%);

`;
const  SubHeading = styled.h2`
    color: ${({theme})=>theme.colors.neutral.VeryDarkBlue};
    padding-top: 5rem;
    

`;

const DescriptionCenter = styled.p`
word-wrap: break-word;
width:480px;
font-size:18px;
text-align: center;
color: ${({theme})=>theme.colors.neutral.VeryDarkBlue};
line-height: 1.5rem;
margin: .5rem 0;
font-weight: 500;
margin-bottom: 7rem;
`;

const Card= styled.div`
background-color: #fff;
padding: 1rem 1.5rem;
border-radius: .5rem;

&:nth-child(5){
    transform: translate(0,40%);
}
&:nth-child(3){
    transform: translate(0,20%);
}

`;
const  CardImage = styled.div`
background-color: ${({theme})=>theme.colors.primary.DarkViolet};
background-color: #3b3054;
padding: 1rem;
align-items: center;
border-radius: 50%;
width: fit-content;
transform: translate(0,-60%);
    
`;
const  CardHeading = styled.h3`
    color: ${({theme})=>theme.colors.neutral.VeryDarkBlue};
    margin-bottom: 1.5rem;
    margin-top: -.5rem;
    
`;
const  CardBody = styled.p`
    word-wrap: break-word;
    width:clamp(200px,21vw,380px);
    font-size:clamp(14px,2vw,18px);
    color: ${({theme})=>theme.colors.neutral.GrayishViolet};
    margin: 1.5rem 0;

`;
const  Line = styled.hr`

    width:50px;
    align-self: center;
    font-size:18px;
    border: none;
    height: 10px;
    background-color: ${({theme})=>theme.colors.primary.Cyan};

`;


export {InfoBox,SubHeading,DescriptionCenter,Card,Line,CardBody,CardHeading,CardImage};