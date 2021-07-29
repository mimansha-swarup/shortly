
import { Card,CardBody,CardHeading,CardImage } from "../StyledComponents/InfoStyle"

const CardDisplay = ({data}) => {
    const {img,heading,desc} = data;
    return ( 
        <Card>
            <CardImage>

            <img src={img} alt="" />
            </CardImage>
            <CardHeading>{heading}</CardHeading>
            <CardBody>{desc}</CardBody>
        </Card>
     );
}
 
export default CardDisplay;