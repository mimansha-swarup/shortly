import styled from "styled-components";

const FooterCont = styled.footer`
padding: 3rem 2rem;
overflow-x: hidden;
display: flex;
justify-content: space-between;
color: ${({theme})=>theme.colors.neutral.Gray};
background-color: ${({theme})=>theme.colors.neutral.VeryDarkViolet};
font-size: 14px;
div{
  display: flex;
}
img{
  align-self: baseline;
  margin: 1.5rem  0 0 0;
  filter: invert(99%) sepia(95%) saturate(24%) hue-rotate(88deg) brightness(109%) contrast(101%);
  
}
ul {
  padding: 0;
  margin :1rem;
}
ul li{
  list-style: none;
  margin:  1rem 2.3rem;
}
ul li:hover{
  color: ${({theme})=>theme.colors.primary.Cyan};
}
@media (max-width:768px){
  justify-content: center;
  font-size: 16px;
  align-items: center;
  padding: 0;
  margin: 0;
  width: auto;
  flex-direction: column;
  img{
    align-self: center;
    margin: 4rem 0 0 0;
    
    
  }
  div{
    flex-direction: column;
  }
  ul {
    padding: 0;
    margin :1rem 0;
  }
  ul li{
    list-style: none;
    margin:  1rem 0;
    text-align: center;
  }
}

`;

const FooterHeading = styled.h4`
font-weight: 700;
color: #fff;
margin: 2rem 2.3rem;
margin-top: 1rem;
@media (max-width:768px){
  margin: 2rem 0;
  text-align: center;

}

`;
const LogoRow = styled.section`
  display: flex;
  img{
    margin:2rem 1.2rem;
    padding: 0;
    filter: invert(0%) sepia(95%) saturate(20%) hue-rotate(315deg) brightness(102%) contrast(105%);
    /* filter: invert(99%) sepia(95%) saturate(24%) hue-rotate(88deg) brightness(109%) contrast(101%); */
  }
  img:hover{
    /* filter: invert(89%) sepia(48%) saturate(2522%) hue-rotate(132deg) brightness(82%) contrast(98%); */
    filter: invert(13%) sepia(10%) saturate(3743%) hue-rotate(101deg) brightness(92%) contrast(98%);
  }
  @media (max-width:768px){
    flex-direction: row;
    margin-bottom:3rem ;
    justify-content: center;
    /* margin: auto; */
  }

`;


export{FooterCont,FooterHeading,LogoRow}