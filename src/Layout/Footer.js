import { FooterCont,FooterHeading,LogoRow } from "../StyledComponents/FooterStyle";
import footericon from "../assets/logo.svg"
import fb from "../assets/icon-facebook.svg"
import ig from "../assets/icon-instagram.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import { Row } from "../StyledComponents/CommonComponent";

const Footer = () => {
    return ( 
        <FooterCont>
            <img style={{color:"#fff"}} src={footericon} alt="" />
            <div>
            <ul>
            <FooterHeading>
                Features
            </FooterHeading>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>

            <ul>
            <FooterHeading>
                Resources
            </FooterHeading>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>

            <ul>
            <FooterHeading>
                Company
            </FooterHeading>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            </div>
            <LogoRow>
                <img src={fb} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={ig} alt="" />
            </LogoRow>
        </FooterCont>
     );
}
 
export default Footer;