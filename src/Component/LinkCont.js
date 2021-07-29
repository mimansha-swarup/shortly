import {  Row } from "../StyledComponents/CommonComponent";
import { LinkBox ,ShortenLink,LinkButton} from "../StyledComponents/ShortenStyle";
// import {useEffect,useState,useRef} from "react";


// const CopyToClipElement = ({ text }) => {
//     const myRef = useRef(null);
//     const [data, setData] = useState(text);
//     useEffect(() => setData(text), [text]);
  
//     useEffect(() => {
//       if (myRef.current && data) {
//         myRef.current.select();
//         document.execCommand("copy");
//         setData(null);
//       }
//     }, [data, myRef.current]);
  
//     return <div>{data && <textarea ref={myRef}>{data}</textarea>}</div>;
//   };

const LinkCont = ({data}) => {
    // const result=data.data

    let myInput = null;
  const copyToClipboard = () => {
    myInput.select();
    document.execCommand("copy");
    alert("Copied the text: " + myInput.value);
  };
    

    return ( 
    <LinkBox>
        <p>{data["original_link"]}</p>
        <Row>
            <ShortenLink readonly value={data["full_short_link"]}>
                
            </ShortenLink>
            <LinkButton onClick={copyToClipboard} ref={(ref) => myInput = ref} ></LinkButton>
        </Row>
    </LinkBox>
     );
}
 
export default LinkCont;