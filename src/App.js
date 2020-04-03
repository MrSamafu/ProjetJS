import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme
} from '@chakra-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './interface/Home'
import Login from './firebase/Login'
import SignUp from './firebase/SignUp'
import { AuthProvider } from "./firebase/Auth";

const App = () => (//initialize routes for change web page
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
export default App
