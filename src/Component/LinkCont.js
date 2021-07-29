import {  Row } from "../StyledComponents/CommonComponent";
import { LinkBox ,ShortenLink,LinkButton} from "../StyledComponents/ShortenStyle";

const LinkCont = () => {
    return ( 
    <LinkBox>
        <p>https://www.rmg.com</p>
        <Row>
            <ShortenLink>
                https://bitly.com
            </ShortenLink>
            <LinkButton></LinkButton>
        </Row>
    </LinkBox>
     );
}
 
export default LinkCont;