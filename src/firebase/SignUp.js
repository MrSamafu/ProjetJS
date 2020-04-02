import React, { useCallback } from "react";
import { withRouter } from "react-router";
import config from "./base";
import {
  Button,
  Flex,
  Image,
  Popover,
  PopoverArrow, PopoverBody, PopoverCloseButton,
  PopoverContent, PopoverHeader,
  PopoverTrigger,
  Select,
  Text
} from "@chakra-ui/core";
import {Link} from "react-router-dom";

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
      <Flex // Header
          backgroundColor="gray.100"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          overflow="visible"
          width="100%"
          height="20%"
      >
        <Flex
            justifyContent="center"
            alignItems="center"
            width="75%"
            height="100%"
        >
          <Flex
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
          >
            <Flex
                justifyContent="center"
                alignItems="center"
                width="25%"
                height="100%"
            >
              <Image // Logo Overwatch
                  width="25%"
                  src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
              />
            </Flex>
            <Flex width="75%" height="100%" p={5}>
              <Text
                  fontFamily="Bangers"
                  textAlign="center"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontSize="5xl"
                  color="orange.300"
                  width="100%"
                  height="100%"
              >
                Overview
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="25%"
            height="100%"
            m={5}
        >


          <Flex
              justifyContent="center"
              alignItems="center"
              p={5}
              height="100%"
              width="140px"
              flexDirection="column"
          >

            <Link to="/">
                  <Button
                      m={3}
                      backgroundColor="orange.300"
                      color="whiteAlpha.900"
                      letterSpacing="widest"
                      height="50px"
                      width="100%"
                      borderRadius="10px"
                      fontSize="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      size="md"
                      variantColor="yellow"
                      flexDirection="column"
                      textAlign="center"

                  >

                    Home
                  </Button>
                </Link>
            <Flex flexDirection="column">
              <Flex>
                <Image
                    width="25%"
                    src="https://s18955.pcdn.co/wp-content/themes/sharethis-custom/assets/images/facebookimg.png"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mr={1}
                >
                </Image>
                <div class="fb-share-button" data-href="http://localhost:3000/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Partager</a></div>
              </Flex>
              <Flex
                  mt={1}
              >
                <Image
                    width="25%"
                    src="https://s18955.pcdn.co/wp-content/themes/sharethis-custom/assets/images/twitterimg.png"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mr={1}
                >
                </Image>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="true">Partager</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <h1 justifyContent="center"></h1>
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
        <br />
        <br />
        <br />
        <Button
            m={3}
            backgroundColor="orange.300"
            color="whiteAlpha.900"
            letterSpacing="widest"
            height="50px"
            width="100%"
            borderRadius="10px"
            fontSize="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            size="md"
            variantColor="yellow"
            flexDirection="column"
            textAlign="center"
            type="submit"

        >

          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
