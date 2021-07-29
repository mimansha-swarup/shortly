import {  Row } from "../StyledComponents/CommonComponent";
import { LinkBox ,ShortenLink,LinkButton} from "../StyledComponents/ShortenStyle";
import {useState} from "react";

const LinkCont = ({data}) => {
    // const result=data.data
  const [myInput, setMyInput] = useState(null)
    // let myInput = null;
  const copyToClipboard = () => {
    myInput.select();
    document.execCommand("copy");
    alert("Copied the text: " + myInput.value);
  };
    

    return ( 
    <LinkBox>
        <p>{data["original_link"]}</p>
        <Row>
            <ShortenLink readOnly ref={(ref) => setMyInput(ref)} value={data["full_short_link"]}>
                
            </ShortenLink>
            <LinkButton onClick={copyToClipboard}  ></LinkButton>
        </Row>
    </LinkBox>
     );
}
 
export default LinkCont;