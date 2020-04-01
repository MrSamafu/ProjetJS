import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme
} from '@chakra-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Home />
  </ThemeProvider>
)

export default App
