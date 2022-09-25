import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles/theme'
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Pages/Home'
import { PopupProvider } from './context/PopupContext';


function App() {
  return (
    <div className="App">
      <PopupProvider>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Home />
        </ThemeProvider>
      </PopupProvider>
    </div >
  )
}

export default App
