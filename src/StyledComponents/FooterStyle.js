import styled from "styled-components";

const FooterCont = styled.footer`
padding: 3rem 9rem 4rem 9rem;
overflow-x: hidden;
display: flex;
color: ${({theme})=>theme.colors.neutral.Gray};
background-color: ${({theme})=>theme.colors.neutral.VeryDarkViolet};
font-size: 14px;
img{
  align-self: baseline;
  margin: 2rem  10rem 0 0;
  
}
ul {
  padding: 0;
  margin :2rem;
}
ul li{
  list-style: none;
  margin:  1rem 2.3rem;
}
`;

const FooterHeading = styled.h4`
font-weight: 700;
color: #fff;
margin: 2rem 2.3rem;
margin-top: 1rem;
`;
const LogoRow = styled.div`
display: flex;
img{
  margin:3rem 1.2rem;
  padding: 0;
}

`;


export{FooterCont,FooterHeading,LogoRow}