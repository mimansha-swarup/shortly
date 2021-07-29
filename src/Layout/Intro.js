import { Row,Column, PrimaryButton } from "../StyledComponents/CommonComponent";
import { Heading,ImgCont,IntroBox,Description } from "../StyledComponents/IntroStyle";
import workingPerson from "../assets/illustration-working.svg"

const IntroCont = () => {
    return ( 
            <IntroBox>
                <ImgCont>
                    <img src={workingPerson} alt=""/>
                </ImgCont>
       
            <Row>
                <Column>
                <Heading>
                    More than just shorter links
                </Heading>
                <Description>
                    Build your brand's recognition and get detailed 
                    insights on how your links are performing.
                </Description>
                <PrimaryButton>Get Started</PrimaryButton>
                </Column>
            </Row>
       
        </IntroBox>
     );
}
 
export default IntroCont;