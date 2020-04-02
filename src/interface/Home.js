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
    PopoverCloseButton, Select,

} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import SearchBar from './searchBar'
import config from "../firebase/base";
import "firebase/database";



class Home extends Component {
    constructor() {
      super();
        this.state = {
            battleTag: "Loading...",
            email:"Loading...",
            plateform:"Loading...",
            displayProfil:'none'
            }

    let isUser = config.auth().currentUser;
    let  email, uidUser;
    if (isUser != null) {

      uidUser = isUser.uid;
      email = isUser.email;
      this.setState({
         email: toString(isUser.email)
        });

      let refUser = config.database().ref('user/' + uidUser + '/BattleNet');
      refUser.on('value',(snapshot) => {
        this.setState({
          battleTag: snapshot.val(),
        });  
      });
      let refPlate = config.database().ref('plate/' + uidUser + '/PlateForm');
      refPlate.on('value',(snapshot) => {
        this.setState({
          plateform: snapshot.val(),
        });  
      });
      
      
      console.log(email)
    } else {
      
    }
}
render(){
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
                    { isUser ? <Button
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
                        onClick={() => {config.auth().signOut(); document.location.reload()}}
                    >

                        Logout
                    </Button>: <Link to="/login" > <Button
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
                    </Button> </Link> }
                    { isUser ?
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
                                </Select><Button
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

                                    Update
                                </Button><Button
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
                        </Popover>:  <Link to="/register">
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
                    </Link> }



                </Flex>
            </Flex>
        </Flex>
        <SearchBar/>
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