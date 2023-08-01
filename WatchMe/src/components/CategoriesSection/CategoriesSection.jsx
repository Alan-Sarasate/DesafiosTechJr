import CategoryButton from "../CategoryButton/CategoryButton";
import { StyledCategoriesSection, StyledTitle } from "./CategoriesSectionStyles";


export default function CategoriesSection({buttons}){

    return(
        <StyledCategoriesSection>
            <StyledTitle>Watch<span>Me</span></StyledTitle>
            <CategoryButton buttonText={"Ação"} />
            <CategoryButton buttonText={"Comédia"} />
            <CategoryButton buttonText={"Documentário"} />
            <CategoryButton buttonText={"Drama"} />
            <CategoryButton buttonText={"Terror"} />
            <CategoryButton buttonText={"Família"} />
        </StyledCategoriesSection>
        
    )
}