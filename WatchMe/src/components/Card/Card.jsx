import { CardBox, MovieSpecifications, MovieTitle, SpecificContent } from "./CardStyles";
import StarIcon from "../../assets/starIcon.svg"
import Clockicon from "../../assets/clockIcon.svg"

export default function Card({cardImage, title, note, duration}){

    return(
        <CardBox>
            <img src={cardImage} alt="imagem"/>
            <SpecificContent>
                <MovieTitle>{title}</MovieTitle><br/>
                <MovieSpecifications>
                    <img src={StarIcon} alt="Star"/>
                    {note}/10
                </MovieSpecifications>
                <MovieSpecifications>
                    <img src={Clockicon} alt="Star"/>
                    {duration} min
                </MovieSpecifications>
                
            </SpecificContent>

        </CardBox>
    )
}