import React, { useCallback } from "react";
import { withRouter } from "react-router";
import config from "./base";
import {Select} from "@chakra-ui/core";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password,BattleNet,PlateForm} = event.target.elements;

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

      config.database().ref('plate/' + letUserId).set({
      PlateForm: PlateForm.value,
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
        Pseudo :
        <input name="BattleNet" type="text" placeholder="Peudo Battle.net" />
      </label>
        <label>
          Plateform :
          <Select
              name="PlateForm"
              id="platformSelection"
              placeholder="Platforms"
              w="50%"
              letterSpacing="wide"
          >
            <option value="pc">PC</option>
            <option value="xbl">XBOX</option>
            <option value="psn">PS4</option>
            <option value="nintendo-switch">Nintendo Switch</option>
          </Select>
        </label>

        <label>
          Email :
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password :
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
