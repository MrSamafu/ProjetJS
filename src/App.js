import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme
} from '@chakra-ui/core'
import Home from './Home'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Home />
  </ThemeProvider>
)

export default App
