import {NavBar, NavLink, NavCont } from "../StyledComponents/NavBarStyles"
import {PrimaryButton} from "../StyledComponents/CommonComponent"
import brandicon from "../assets/logo.svg"
import {FiMenu} from "react-icons/fi"
const Nav =()=>{
    return(

        <NavBar>
        <div>
          <img src={brandicon} alt=""  />
          <input type="checkbox" name="menu" id="menu" />
        <label htmlFor="menu"><FiMenu/></label>
          <NavCont>
            
        <div>
            <NavLink>Features</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Resource</NavLink>
        </div>
        <div>
          <NavLink>Login</NavLink>
          <PrimaryButton>Sign Up</PrimaryButton>

        </div>
          </NavCont>
       
        </div>
      </NavBar>
    );
}

export default Nav;