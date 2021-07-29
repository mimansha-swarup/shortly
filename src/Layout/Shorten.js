import { Column } from "../StyledComponents/CommonComponent";
import { ShorterCont,InputCont,Input,NotRoundedPrimaryButton,GreyBox} from "../StyledComponents/ShortenStyle";
import LinkCont from "../Component/LinkCont";
import Axios from "axios";
import {useState} from "react" ;


const Shorten = () => {
    const [userUrl, setUserUrl] = useState("")
    const [data, setData] = useState([])
    const baseUrl =`https://api.shrtco.de/v2/shorten?url=${userUrl}`

    const HandleApi= async()=>{
      
        await Axios.get(baseUrl)
            .then(res=>
                {
                setData([...data , res.data.result])})


    }
    const HandleFormSubmit= async(e)=>{
        e.preventDefault();
        HandleApi();
        e.target.reset();
        
    }



    return (  
        <>
        <ShorterCont>
            <Column>
            <form onSubmit={HandleFormSubmit}>

            <InputCont>
                {/* <Row> */}
                    <Input onChange={(e)=>setUserUrl(e.target.value)} type="text" placeholder="Shortern a  link here..." ></Input>
                    <NotRoundedPrimaryButton type="submit" >Shortern it!</NotRoundedPrimaryButton>
                
            </InputCont>
            </form>
            </Column>
        </ShorterCont>
        <GreyBox>
            {data.length>0 && data.map((ele,i)=> (<LinkCont key={i} data={ele}/>))}
            {console.log(data)}
      
        </GreyBox>
        </>
    );
}
 
export default Shorten;