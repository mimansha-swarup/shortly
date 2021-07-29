import styled from "styled-components";

const NavBar = styled.nav`
  
  display: flex;
  justify-content: space-between;
  padding:  3rem 9rem;
  div img{
    align-items: center;
    font-size: 1rem;
  }
  div{
    display:flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    
  }
  
  input {
    display: none;
  }
  label {
    display: none;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    padding:  2rem 0;
    div{
      justify-content: space-between;
    }
    div img{
      margin:0  1rem;
    }
    label {
      margin:0  1.2rem;
    display: block;
    color: ${({theme}) =>theme.colors?.neutral.GrayishViolet};
    }
    div ul{
      color:#fff;
      position: fixed;
      margin: 0 auto;
      padding: 0;
      top: 4.9rem;
      left: 0;
      right: 0;
      z-index: 20;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: fit-content;
      width: 80%;
      border-radius: 1rem;
      background-image: blur(55px);
      transition: display 1s ease-in-out;
      background-color: ${({theme}) =>theme.colors?.primary.DarkViolet};
    }
    div ul div{
      display: flex;
      flex-direction: column;
    }
    div ul div button{
      margin-bottom: 2rem;
      width: 100%;
    }
    input:checked~ul {
      display: block;
    }
    
  }
  `;
const NavLink = styled.li`
  color: ${({theme}) =>theme.colors?.neutral.GrayishViolet};
  list-style: none;
  margin: 0 1.5rem;
  font-weight: 700;
  cursor: pointer;
  &:hover{
    color: #000;
  }
  @media (max-width: 768px) {
    margin:  1.5rem 0;
    color: #fff;
    
  }
  
  `;
const NavCont = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 63vw;
  padding: 0;
   div{
    justify-content: flex-end;
    width: fit-content;
    /* background-color: red; */
  }
  @media (max-width: 768px) {
    display: none;

    div{
      text-align: center;
      margin:  auto;
    }
    div button{
      width: 100%;
    }
  }
  `;




export { NavBar, NavLink, NavCont };