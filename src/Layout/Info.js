import { Container, ColumnCenter } from "../StyledComponents/CommonComponent"
import { InfoBox,SubHeading,CardLayOut,DescriptionCenter, Line } from "../StyledComponents/InfoStyle"
import BrandRecognitionLogo from "../assets/icon-brand-recognition.svg"
import DetailedRecordsLogo from "../assets/icon-detailed-records.svg"
import FullyCustomizableLogo from "../assets/icon-fully-customizable.svg"
import CardDisplay from "../Component/Card"


const InfoCont = () => {
    const cardData =[
        {
            img:BrandRecognitionLogo,
            heading:"Brand Recognition",
            desc:"Boost Your brand recognition with each click, Generic links don't mean a thing. Branded liks help instil confidence in your content."
        },
        {
            img:DetailedRecordsLogo,
            heading:"Detailed Records",
            desc:"Gain Insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. "
        },
        {
            img:FullyCustomizableLogo,
            heading:"Fully Customizable",
            desc:"Improve brand awareness and content discoverability through cutomizable link, supercharging audiance engagement."
        }
    ];


    return (
        <InfoBox>
            <Container>
                <ColumnCenter>
                    <SubHeading white="no">Advanced Statistics</SubHeading>
                    <DescriptionCenter >Track How your links are performing across the web with <br/>
                        our advanced statistics dashboard.
                    </DescriptionCenter>
                    
                </ColumnCenter>
                <CardLayOut>
                    <CardDisplay data={cardData[0]} />
                    <Line/>
                    <CardDisplay data={cardData[1]} />
                    <Line/>
                    <CardDisplay data={cardData[2]} />                
                </CardLayOut>
            </Container>
        </InfoBox>
     );
}
 
export default InfoCont;