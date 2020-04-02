import React, { useCallback } from "react";
import { withRouter } from "react-router";
import config from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password,BattleNet} = event.target.elements;

    try {
      await config
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      const letUserId = config.auth().currentUser.uid
      console.log(letUserId);
      config.database().ref('user/' + letUserId).set({
        BattleNet: BattleNet.value,
        //some more user data
      });

      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Pseudo
          <input name="BattleNet" type="text" placeholder="Peudo Battle.net" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
