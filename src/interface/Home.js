import React, { Component } from 'react'
import {
    ThemeProvider,
    CSSReset,
    Grid,
    theme,
    Flex,
    Text,
    Button,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton, 
    Select,
    Skeleton

} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import SearchBar from './searchBar'
import config from "../firebase/base"
import "firebase/database"
import PanelAdmin from "../admin/panelAdmin"




class Home extends Component {
    constructor() {
        super();
        this.state = {
            battleTag: "Loading...",//initialize state default
            email: <Skeleton height="20px" my="4px" colorStart="gray" colorEnd="orange"/>,
            plateform: "Loading...",
        }

        let isUser = config.auth().currentUser;//connecting Firebase
        let email, uidUser;
        if (isUser != null) {//verify if user is connected
            uidUser = isUser.uid;
            email = isUser.email.toString();
            this.setState({
                email: email
            });
            let refUser = config.database().ref('user/' + uidUser + '/BattleNet');
            refUser.on('value', (snapshot) => {
                this.setState({
                    battleTag: snapshot.val(),
                });
            });
            let refPlate = config.database().ref('plate/' + uidUser + '/PlateForm');
            refPlate.on('value', (snapshot) => {
                this.setState({
                    plateform: snapshot.val(),
                });
            });
        }
    }

    componentDidUpdate(prevState) {
        if (this.state.email !== prevState.email) {//try make email in popover profil(failure)
            console.log("CouCou");
            console.log(this.state.email);
            console.log(prevState.email)

            return;
        }
    }

    render() {//display Home

        let isUser = config.auth().currentUser;
        return <ThemeProvider theme={theme}>
            <CSSReset />
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
                         
                        {isUser ? <Button
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
                            onClick={() => { config.auth().signOut(); document.location.reload() }}
                        >

                            Logout
                    </Button> : <Link to="/login" > <Button
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
                                variant="solid"
                                variantColor="yellow"
                                flexDirection="column"

                            >
                                Login
                    </Button> </Link>}
                        {isUser ?
                            <Popover>
                                <PopoverTrigger>
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
                                        variant="solid"
                                        variantColor="yellow"
                                        flexDirection="column"

                                    >
                                        Profil
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent zIndex={4}>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader letterSpacing="wide">Status: Connected </PopoverHeader>
                                    <PopoverBody letterSpacing="wide"> Pseudo : {this.state.battleTag} <br /> Email : {this.state.email} <br /> Change Your Plateform ?
                                <Select
                                            value={this.state.plateform}
                                            id="platformSelection"
                                            placeholder="New Plateform?"

                                            justifyContent="center"
                                            alignItems="center"
                                            letterSpacing="wide"
                                        >
                                            <option value="pc">PC</option>
                                            <option value="xbl">XBOX</option>
                                            <option value="psn">PS4</option>
                                            <option value="nintendo-switch">Nintendo Switch</option>
                                        </Select><br /><Popover>
                                            <PopoverTrigger>

                                                <Button
                                                    m={3}
                                                    backgroundColor="orange.300"
                                                    color="whiteAlpha.900"
                                                    letterSpacing="widest"
                                                    height="50px"
                                                    width="90%"
                                                    borderRadius="10px"
                                                    fontSize="100%"
                                                    display="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    size="md"
                                                    variantColor="yellow"
                                                    flexDirection="column"
                                                    textAlign="center"
                                                >Players</Button>

                                            </PopoverTrigger>
                                            <PopoverContent zIndex={4}>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverHeader letterSpacing="wide">Player </PopoverHeader>
                                                <PopoverBody letterSpacing="wide" > <br /><Button
                                                    variantColor="facebook"
                                                    display="block"
                                                    flexDirection="row-reverse"
                                                    width="100%"
                                                    borderRadius="6px"

                                                >Add friends</Button><br /> <Button
                                                    variantColor="yellow"
                                                    display="block"
                                                    flexDirection="row-reverse"
                                                    width="100%"
                                                    borderRadius="6px"

                                                >Signal Player</Button><br />

                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover><Button
                                            m={3}
                                            backgroundColor="orange.300"
                                            color="whiteAlpha.900"
                                            letterSpacing="widest"
                                            height="50px"
                                            width="90%"
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

                                            Search Profil
                                </Button><br /></PopoverBody>
                                </PopoverContent>
                            </Popover> : <Link to="/register">
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

                                    Sign Up
                        </Button>
                            </Link>}
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
                                    <div class="fb-share-button" data-href="http://localhost:3000/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>                    
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
                                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="true">Share</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                </Flex>
                            </Flex>                            
                            </Flex>
                </Flex>
            </Flex>
            <SearchBar />
            <Flex
                justifyContent="center"
            >
                <PanelAdmin />
            </Flex>
            
            <Flex // Footer
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                backgroundColor="gray.100"
                overflow="visible"
                width="100%"
                height="10%"
                position="scroll"
                bottom="0"
            >
                <Flex
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    width="25%"
                    height="100%"
                >
                    <Image
                        height="35px"
                        width="35px"
                        src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
                        m={5}
                    />
                </Flex>
                <Text
                    letterSpacing="widest"
                    fontSize="100%"
                    width="75%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    2020 © Overview. All rights reserved.
            </Text>
                <Flex
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    width="25%"
                    height="100%"
                >
                    <Image
                        height="35px"
                        width="35px"
                        src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
                        m={5}
                    />
                </Flex>
            </Flex>
        </ThemeProvider>
    }


}




export default Home