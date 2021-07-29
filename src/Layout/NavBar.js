import {NavBar, NavLink, NavCont } from "../StyledComponents/NavBarStyles"
import {PrimaryButton} from "../StyledComponents/CommonComponent"
import brandicon from "../assets/logo.svg"
const Nav =()=>{
    return(

        <NavBar>
        <div>
          <img src={brandicon} alt=""  />
          <NavCont>
            <NavLink>Features</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Resource</NavLink>
          </NavCont>
        </div>
        <div>
          <NavLink>Login</NavLink>
          <PrimaryButton>Sign Up</PrimaryButton>

        </div>
      </NavBar>
    );
}

export default Nav;