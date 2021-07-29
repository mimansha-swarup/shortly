import styled from "styled-components";

const Row = styled.div`
height: fit-content;
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  /* align-items: center;  */
  `;
const ColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: fit-content;
  `;
const Container = styled.div`
height: fit-content;
min-height: 120vh;
display: flex;
flex-direction: column;
align-items: center;
overflow-x:hidden;
margin: 0;



`;
const PrimaryButton = styled.button`
padding: 0.8rem 1.3rem;
background-color: ${({theme}) =>theme.colors?.primary.Cyan};
color: #fff;
font-weight: 700;
cursor: pointer;
border-radius: 2rem;
border:none;
/* margin: 0 1.5rem; */
max-width: 10rem;
&:hover{
  background-color:  ${({theme}) =>theme.colors?.hover};
}
`;



export {Row,Column,Container,PrimaryButton,ColumnCenter};