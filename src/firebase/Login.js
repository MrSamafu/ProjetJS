import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import config from "./base";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await config
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          const letUserId = config.auth().currentUser.uid
                  var BattleNet = config.database().ref('user/' + letUserId + '/BattleNet');
                  BattleNet.on('value', function(snapshot) {
                      //updateStarCount(postElement, snapshot.val());
                      console.log(snapshot.val())

              history.push("/");
          });

      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);