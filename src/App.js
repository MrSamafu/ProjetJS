import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme
} from '@chakra-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Inscription from './Inscription'
import Login from './Login'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  </ThemeProvider>
)

export default App
