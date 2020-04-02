import React from 'react';
import Fire from './config/Fire';
import {
  Button,
  Flex
} from '@chakra-ui/core'
import { Link } from 'react-router-dom';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    Fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    Fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <Flex
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        <div>
          <div>E-mail:</div>
          <input id="email" placeholder="Enter Email.." type="text" />
        </div>
        <div>
          <div>Password:</div>
          <input id="password" placeholder="Enter Password.." type="text" />
        </div>
        <Button style={{ margin: '10px' }} onClick={this.login}>Login</Button>
        <Link to="/register"><button style={{ margin: '10px' }} onClick={this.signUp}>Sign Up</button></Link>
      </Flex>
    )
  }
}

export default Login;
