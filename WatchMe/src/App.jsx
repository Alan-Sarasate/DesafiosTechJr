import { useEffect, useState } from 'react'
import { Wrapper } from './components/Wrapper/WrapperStyles'
import { StyledCategoriesSection, StyledTitle } from './components/CategoriesSection/CategoriesSectionStyles'
import CategoryButton from './components/CategoryButton/CategoryButton'
import CardsSection from './components/CardSection/CardsSection'
import GlobalStyles from './GlobalStyles'
import {buttonsIcons} from "./buttonsIcons.jsx"

function App() {
  
  const [movies, setMovies] = useState([])
  const [buttonsContent, setButtonsContent] = useState([])
  const [showMovies, setShowMovies] = useState([])
  const [movieGenre, setMovieGenre] = useState("Ação")
  

  useEffect(()=> {
    fetch("./server.json")
      .then((resp) => resp.json())
      .then((datas) => {
        setButtonsContent(datas.genres)
        setMovies(datas.movies)
        setShowMovies(datas.movies.filter((movie) => movie.Genre_id === 1))
    })
  }, [])

  function handleClick (button){
    setMovieGenre(button.title)
    setShowMovies(movies.filter((movie) => movie.Genre_id === button.id))
  }
  
  return (
    <Wrapper>
      <StyledCategoriesSection>
        <StyledTitle>Watch<span>Me</span></StyledTitle>
        {buttonsContent.map((button, index) => <CategoryButton buttonText={button.title} icon={buttonsIcons[index].icon} key={index} handleClickFunction={()=>handleClick(button)}></CategoryButton>)}
      </StyledCategoriesSection>
      <CardsSection movieGenre={movieGenre} movies={showMovies}/>
      <GlobalStyles/>
    </Wrapper>
  )
}

export default App
