import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles/theme'
import { GlobalStyle } from './GlobalStyle';
import Home from './components/modules/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
