import Card from "../Card/Card";
import { CardsBox, StyledCardsSection, StyledH1, TitleBox} from "./CardsSectionStyles";

export default function CardsSection({movieGenre, movies}){

    return (
        <StyledCardsSection>
            <TitleBox>
                <StyledH1>Categorias: <span>{`${movieGenre}`}</span></StyledH1>
            </TitleBox>
            <CardsBox>
                {movies.map((movie, index) => (
                  <Card title={movie.Title} cardImage={movie.Poster} note={movie.Ratings[0].Value} duration={movie.Runtime} key={index}/>
                ))}
            </CardsBox>
        </StyledCardsSection>

    )

}