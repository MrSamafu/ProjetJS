import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme
} from '@chakra-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import {AuthProvider} from "./Auth";

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <AuthProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
    </AuthProvider>
  </ThemeProvider>
)

const homePage = () => (
  <Home />
)

export default App
