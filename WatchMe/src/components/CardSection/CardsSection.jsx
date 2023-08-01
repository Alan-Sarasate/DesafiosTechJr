import Card from "../Card/Card";
import { CardsBox, StyledCardsSection, StyledH1, TitleBox} from "./CardsSectionStyles";

export default function CardsSection({movieGenre, movies}){

    return (
        <StyledCardsSection>
            <TitleBox>
                <StyledH1>Categorias: <span>{`${movieGenre}`}</span></StyledH1>
            </TitleBox>
            <CardsBox>
                {movies.map((movie) => (
                  <Card title={movie.titulo} cardImage={movie.poster} note={movie.nota} duration={movie.duracao}/>
                ))}
            </CardsBox>
        </StyledCardsSection>

    )

}