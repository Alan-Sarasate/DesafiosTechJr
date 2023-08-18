import { CardBox, MovieSpecifications, MovieTitle, SpecificContent } from "./CardStyles";
import { AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai'

export default function Card({cardImage, title, note, duration}){

    return(
        <CardBox>
            <img src={cardImage} alt="imagem"/>
            <SpecificContent>
                <MovieTitle>{title}</MovieTitle><br/>
                <MovieSpecifications>
                    <AiOutlineStar/>
                    {note}
                </MovieSpecifications>
                <MovieSpecifications>
                    <AiOutlineClockCircle/>
                    {duration}
                </MovieSpecifications>
                
            </SpecificContent>

        </CardBox>
    )
}