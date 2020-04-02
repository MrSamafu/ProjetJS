import React, { Component } from 'react';
import {
    ThemeProvider,
    CSSReset,
    theme,
    Text,
    Flex,
    Grid,
    Box,
    Button
  } from '@chakra-ui/core'
  import config from "../firebase/base"

class PanelAdmin extends Component {
    constructor() {
      super();
      this.state = {
          panelDisplay: "profil",
          battleTagUser: "none",
          plateformUser: "none",
          emailUser: "none"
      }
      let user = config.auth().currentUser;
      let firebase = config.auth().currentUser;
      let refUser;
      if (user != null){
          refUser = config.database().ref('user');
          refUser.on("value",function(snapshot){
              snapshot.forEach(function(childSnapshot){
                  let battleTagUser = childSnapshot.BattleNet;
                  console.log(battleTagUser);
              });
          });
          
      }
      

    }

    componentDidUpdate(){

    }

    deleteAccount(){
       
    }

    render(){
        return <ThemeProvider theme={theme}>
        <CSSReset />
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={0}
          backgroundColor="facebook.900"
          display="flex"
          alignItems="stretch"
          justifyContent="flex-start"
        >
          <Box display="flex" flexDirection="column">
            <Button>Profil</Button>
            <Button>Users</Button>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            overflow="visible"
            color="whiteAlpha.100"
            bg="gray.100"
            flexDirection="column"
          >
            <Text color="blackAlpha.900">All Users</Text>
            <Flex>
              <Flex flexDirection="column" backgroundColor="gray.500">
                <Text color="blackAlpha.900">BattleTag</Text>
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={6}
                  backgroundColor="gray.300"
                />
              </Flex>
              <Flex flexDirection="column" backgroundColor="gray.500">
                <Text color="blackAlpha.900">Plateform</Text>
                <Flex backgroundColor="gray.300" />
              </Flex>
              <Flex flexDirection="column" backgroundColor="gray.500">
                <Text backgroundColor="whiteAlpha.50" color="blackAlpha.900">
                  Email
                </Text>
                <Flex backgroundColor="gray.300" />
              </Flex>
            </Flex>
          </Box>
        </Grid>
      </ThemeProvider>
    }
}
export default PanelAdmin;