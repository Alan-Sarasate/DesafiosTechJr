import { useState } from 'react'
import { filmes } from './filmes'
import { buttonsContent } from './buttonsContents'
import { Wrapper } from './components/Wrapper/WrapperStyles'
import { StyledCategoriesSection, StyledTitle } from './components/CategoriesSection/CategoriesSectionStyles'
import CategoryButton from './components/CategoryButton/CategoryButton'
import CardsSection from './components/CardSection/CardsSection'
import GlobalStyles from './GlobalStyles'

function App() {

  const [movieGenre, setMovieGenre] = useState("Ação")
  const [movies, setMovies] = useState(filmes.filter((filme) => filme.genero === "Ação"))

  function handleClick (button){
     setMovieGenre(button.buttonText)
     setMovies(filmes.filter((filme) => filme.genero === button.buttonText))
  }

  return (
    <Wrapper>
      <StyledCategoriesSection>
          <StyledTitle>Watch<span>Me</span></StyledTitle>
          {buttonsContent.map((button, index) => <CategoryButton buttonText={button.buttonText} icon={button.buttonIcon} key={index} handleClickFunction={()=>handleClick(button)}></CategoryButton>)}
      </StyledCategoriesSection>
      <CardsSection movieGenre={movieGenre} movies={movies}/>
      <GlobalStyles/>
    </Wrapper>
  )
}

export default App
