import React, { useCallback } from "react";
import { withRouter } from "react-router";
import config from "./base";
import swal from 'sweetalert';
import {
  Button,
  Flex,
  Image,
  Text,
  FormLabel,
  Input,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {//Save data of signUp form to Firebase
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, BattleNet, PlateForm } = event.target.elements;

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
      swal("You Connected !", "You clicked the button!", "success");
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
                >
                </Image>
                <div class="fb-share-button" data-href="http://localhost:3000/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Partager</a></div>
              </Flex>
              <Flex>
                <Image
                  width="25%"
                  src="https://s18955.pcdn.co/wp-content/themes/sharethis-custom/assets/images/twitterimg.png"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                </Image>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="true">Partager</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          backgroundColor="facebook.900"
          borderRadius="15px"
          mt='5%'
          w="75%"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            height="100%"
            w="100%"
            backgroundColor="facebook.300"
            borderRadius="15px"
          >
            <Text
              fontFamily="Bangers"
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="5xl"
              color="orange.300"
              height="100%"
              w="100%"
              p={5}
            >
              Sign Up
                        </Text>
          </Flex>
          <form onSubmit={handleSignUp}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              h="100%"
              w="100%"
              p={5}
            >
              <Popover>
                <PopoverTrigger>

                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    w="100%"
                    p={3}
                  >
                    <FormLabel
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      textAlign="center"
                      w="100%"
                      letterSpacing="widest"
                      color="white"
                    >
                      Pseudo
                    </FormLabel>
                    <Input display="flex" flexDirection="row" name="BattleNet" type="text" placeholder="Pseudo" borderRadius="15px" textAlign="center" w="100%" />
                  </Flex>

                </PopoverTrigger>
                <PopoverContent zIndex={4}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader letterSpacing="wide">Information ! </PopoverHeader>
                  <PopoverBody letterSpacing="wide"> Pseudo: Exemple <br /><br />( MrSamafu-2680 ) is OK<br />  &<br /> ( MrSamafu#2680 ) is not OK ?

                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Flex
                flexDirection="column"
                justifyContent="center"
                p={3}
              >
                <FormLabel
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  letterSpacing="widest"
                  color="white"
                >
                  Choose your plateform
                                </FormLabel>
                <Select
                  name="PlateForm"
                  id="platformSelection"
                  placeholder="Platforms"
                  w="100%"
                  letterSpacing="wide"
                >
                  <option value="pc">PC</option>
                  <option value="xbl">XBOX</option>
                  <option value="psn">PS4</option>
                  <option value="nintendo-switch">Nintendo Switch</option>
                </Select>
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="center"
                p={3}
              >
                <FormLabel
                  flexDirection="row"
                  justifyContent="center"
                  textAlign="center"
                  letterSpacing="widest"
                  color="white"
                >
                  Email
                                </FormLabel>
                <Input name="email" type="email" placeholder="Email" borderRadius="15px" textAlign="center" />
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="center"
                p={3}
              >
                <FormLabel
                  flexDirection="row"
                  justifyContent="center"
                  textAlign="center"
                  letterSpacing="widest"
                  color="white"
                >
                  Password
                                </FormLabel>
                <Input name="password" type="password" placeholder="Password" borderRadius="15px" textAlign="center" />
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="center"
                w="100%"
              >
                <Button
                  mt="15px"
                  backgroundColor="orange.300"
                  color="whiteAlpha.900"
                  letterSpacing="widest"
                  height="50px"
                  width="125px"
                  borderRadius="10px"
                  fontSize="100%"
                  variantColor="yellow"
                  textAlign="center"
                  type="submit"
                >

                  Sign Up
                            </Button>
              </Flex>

            </Flex>

          </form>
        </Flex>
      </Flex>
    </div >
  );
};

export default withRouter(SignUp);
