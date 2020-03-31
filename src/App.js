import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme
} from '@chakra-ui/core'
import Home from './Home'
import Inscription from './Inscription'
import Login from './Login'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <div className= "App">
      <Inscription />
      <Login />
      <Home />
    </div>
  </ThemeProvider>
)

export default App
