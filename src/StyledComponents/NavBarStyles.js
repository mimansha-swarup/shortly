import styled,{css} from "styled-components";

const NavBar = styled.nav`
  
  display: flex;
  justify-content: space-between;
  padding:  3rem 9rem;
  div{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
  `;
const NavCont = styled.ul`
  display: flex;
  justify-self: center;
  `;




export { NavBar, NavLink, NavCont };