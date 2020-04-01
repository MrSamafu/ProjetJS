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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Inscription} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </ThemeProvider>
)

const homePage = () => (
  <Home />
)

export default App
