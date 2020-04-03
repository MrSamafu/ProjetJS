import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import config from "./base";
import { AuthContext } from "./Auth.js";
import {
    Button,
    Flex,
    Image,
    Text,
    FormLabel,
    Input,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import swal from "sweetalert";
// create const login
const Login = ({ history }) => {
 
    // create const handleLogin for connected Db
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await config
                    //access auth() = authenticate firebase for pull email and password
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
 
                // letUserId = id user in firebase
                const letUserId = config.auth().currentUser.uid
                var BattleNet = config.database().ref('user/' + letUserId + '/BattleNet');
                BattleNet.on('value', function (snapshot) {
                    //updateStarCount(postElement, snapshot.val());
                    console.log(snapshot.val());
                    swal("You Connected !", "You clicked the button!", "success");
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
 
    // start your front whit ChakraUI
 
    return (<Flex
        flexDirection="column"
    >
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
 
 
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor="facebook.900"
                borderRadius="15px"
                mt='100px'
            >
                <Flex
                    flexDirection="row"
                    justifyContent="center"
                    backgroundColor="facebook.300"
                    width="100%"
                    height="100%"
                    borderRadius="15px"
                    p={5}
                >
                    <Text
                        fontFamily="Bangers"
                        textAlign="center"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        fontSize="5xl"
                        color="orange.300"
                        width="150%"
                        height="100%"
                    >
                        Login
                        </Text>
                </Flex>
                <form onSubmit={handleLogin} >
                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        size="100%"
                        p={5}
                    >
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            p={2}
                        >
                            <FormLabel
                                textAlign="center"
                                color="white"
                            >
                                Email:
                                </FormLabel>
                            <Input name="email" type="email" placeholder="Email" borderRadius="15px" textAlign="center" />
                        </Flex>
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            p={2}
                        >
                            <FormLabel
                                flexDirection="row"
                                justifyContent="center"
                                textAlign="center"
                                color="white"
                            >
                                Password:
                                </FormLabel>
                            <Input name="password" type="password" placeholder="Password" borderRadius="15px" flexDirection="row" justifyContent="center" textAlign="center" />
                        </Flex>
                        <Flex
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                            w="100%"
                            p={5}
                        >
                            <Button
                                backgroundColor="orange.300"
                                color="whiteAlpha.900"
                                letterSpacing="widest"
                                height="50px"
                                width="100%"
                                borderRadius="10px"
                                fontSize="100%"
                                variantColor="yellow"
                                textAlign="center"
                                type="submit"
                            >
                                Login
                        </Button>
                        </Flex>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    </Flex>
 
 
    );
};
 
export default withRouter(Login);