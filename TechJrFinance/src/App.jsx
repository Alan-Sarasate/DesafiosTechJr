import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import GlobalStyles from './GlobalStyles'
import TransitionsSection from './components/TransitionsSection/TransitionsSection'

function App() {
  const [count, setCount] = useState(0)

  const theme = {
    colors: {
            primaryColor: '#5429CC',
            secondaryColor: '#D7D7D7',
            alternativeColor: '#6933FF',
            primaryFontColor: '#363F5F'
    } 
}

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <TransitionsSection/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
