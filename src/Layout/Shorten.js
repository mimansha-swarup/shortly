import { Column, Row } from "../StyledComponents/CommonComponent";
import { ShorterCont,InputCont,Input,NotRoundedPrimaryButton,GreyBox,LinkBox ,ShortenLink,LinkButton} from "../StyledComponents/ShortenStyle";
import LinkCont from "../Component/LinkCont";
const Shorten = () => {
    return (  
        <>
        <ShorterCont>
            <Column>

            <InputCont>
                {/* <Row> */}
                    <Input type="text" placeholder="Shortern a  link here..." ></Input>
                    <NotRoundedPrimaryButton>Shortern it!</NotRoundedPrimaryButton>
                
            </InputCont>
            </Column>
        </ShorterCont>
        <GreyBox>
            <LinkCont/>
            <LinkBox>
                <p>https://www.rmg.com</p>
                <Row>
                    <ShortenLink>
                        https://bitly.com
                    </ShortenLink>
                    <LinkButton></LinkButton>
                </Row>
            </LinkBox>
        </GreyBox>
        </>
    );
}
 
export default Shorten;