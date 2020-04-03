import React, { Component } from 'react';
import {
  ThemeProvider,
  CSSReset,
  theme,
  Text,
  Image,
  Flex,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  Spinner


} from '@chakra-ui/core'
import ProfilCharacter from "./profilCharacter.js"
import config from "../firebase/base";

class Profil extends Component {
  constructor() {//initialize state default
    super();
    this.state = {
      profil: "Your profil",
      name: <Spinner />,
      gold: <Spinner />,
      silver: <Spinner />,
      bronze: <Spinner />,
      timeInGame: <Spinner />,
      profilImg: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      levelIcon: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      level: <Spinner />,
      error: "none",
      battleTag: "",
      plateform: 'pc',
      notFound: "block",
      connected: false,
      search: false,

    };
    let user = config.auth().currentUser;//connecting to FireBase
    let uidUser;
    if (user != null) {//verify user is connected(async)

      uidUser = user.uid;
      let refUser = config.database().ref('user/' + uidUser + '/BattleNet');
      refUser.on('value', (snapshot) => {
        this.setState({
          battleTag: snapshot.val(),
        });
        console.log(this.state.battleTag);
      });
      let refPlate = config.database().ref('plate/' + uidUser + '/PlateForm');
      refPlate.on('value', (snapshot) => {
        this.setState({
          plateform: snapshot.val(),
          connected: true
        });
        console.log(this.state.plateform);
      });
    } else {
      this.setState({
        battleTag: "no"
      })
    }


  }

  componentDidUpdate(prevProps, prevState) {//verify if props or state change and update display
    console.log(this.state.battleTag);
    if (this.state.battleTag !== prevState.battleTag && this.state.search === false || this.state.plateform !== prevState.plateform && this.state.search === false) {
      if (this.state.battleTag !== "no") {
        fetch("https://ovrstat.com/stats/" + this.state.plateform + "/" + this.state.battleTag)//Make Battletag and plateform state in API OverStats
          .then(res => res.json())
          .then(
            (result) => {
              if (result.message === "Player not found") {//display if not found
                this.setState({
                  notFound: "none",
                  error: "block",
                  profil: "Player not found"
                })
                return;
              }
              else if (this.state.battleTag === "") {//display if empty
                this.setState({
                  notFound: "none",
                  error: "block",
                  profil: "Search is empty"
                });

                return;
              }
              else {
                this.setState({//load every usefull data of the API in state
                  name: result.name,
                  gold: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsGold,
                  silver: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsSilver,
                  bronze: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsBronze,
                  timeInGame: result.quickPlayStats.careerStats.allHeroes.game.timePlayed,
                  profilImg: result.icon,
                  levelIcon: result.prestigeIcon,
                  level: result.level,
                  battleTag: this.props.battleTag,
                  plateform: this.props.plateform,
                  notFound: "block",
                  error: "none",
                  profil: "Your Profil"
                });
              }
            });
      } else {
        this.setState({
          notFound: "none",
          error: "block",
          profil: "Search profil or Login for see !"
        })
        return;
      }
    }
    else if (this.props.battleTag !== prevProps.battleTag || this.props.plateform !== prevProps.plateform) {// same above but with props

      fetch("https://ovrstat.com/stats/" + this.props.plateform + "/" + this.props.battleTag)
        .then(res => res.json())
        .then(
          (result) => {
            if (result.message === "Player not found") {
              this.setState({
                notFound: "none",
                error: "block",
                profil: "Player not found"
              })
              return;
            }
            else if (this.props.battleTag === "") {
              this.setState({
                notFound: "none",
                error: "block",
                profil: "Search is empty"
              });

              return;
            }
            else {

              this.setState({
                search: true,
                name: result.name,
                gold: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsGold,
                silver: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsSilver,
                bronze: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsBronze,
                timeInGame: result.quickPlayStats.careerStats.allHeroes.game.timePlayed,
                profilImg: result.icon,
                levelIcon: result.prestigeIcon,
                level: result.level,
                battleTag: this.props.battleTag,
                plateform: this.props.plateform,
                notFound: "block",
                error: "none",
                profil: "Profil"
              });
            }
          });
    }
  }

  render() {
    return <ThemeProvider theme={theme} >
      <CSSReset />
      <Flex
        backgroundColor="facebook.500"
        borderRadius="20px"
        w="100%"
        display={this.state.error}
      >
        <Text
          textAlign="center"
          justifyContent="center"
          color="whiteAlpha.900"
          letterSpacing="widest"
          fontSize="xl"
          w="100%"
          fontFamily="Bangers"
        >
          {this.state.profil}
        </Text>
      </Flex>
      <AccordionItem display={this.state.notFound}>
        <AccordionHeader
          backgroundColor="facebook.500"
          borderRadius="20px"
          w="100%"
        >
          <Flex
            textAlign="left"
            justifyContent="center"
            color="whiteAlpha.900"
            letterSpacing="widest"
            fontSize="xl"
            variantColor="blue"
            w="100%"
          >
            {this.state.profil}
          </Flex>
          <AccordionIcon color="whiteAlpha.900" />
        </AccordionHeader>
        <AccordionPanel>
          <Flex flexDirection="column" w="100%">
            <Flex
              backgroundColor="facebook.500"
              color="whiteAlpha.900"
              fontSize="2xl"
              borderRadius="15px"
              w="100%"
              h="100%"
              justifyContent="space-around"
              p={5}
            >
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                w="50%"
              >
                <Flex
                  flexDirection="row"
                  justifyContent="center"
                  w="100%"
                >
                  <Flex
                    flexDirection="row"
                    justifyContent="center"
                    w="50%"
                  >
                    <Image
                      display="flex"
                      flexDirection="row"
                      height="100px"
                      width="150px"
                      borderRadius="15px"
                      src={this.state.profilImg}
                      id="imgPlayer"
                      p={2}
                      size="100%"
                    />
                  </Flex>
                  <Flex
                    flexDirection="row"
                    justifyContent="center"
                    w="50%"
                  >
                    <Image
                      height="40%"
                      width="40%"
                      src={this.state.levelIcon}
                      display="flex"
                      id="imgLvl"
                      p={2}
                      size="100%"
                    />
                  </Flex>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  w="100%"
                ></Flex>
                <Text
                  id="playerName"
                >
                  {this.state.name}
                </Text>
                <Text
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  id="lastlogin"
                  fontFamily="Bangers"
                  letterSpacing="widest"
                  color="blue.300"
                  fontSize="xl"
                >
                  Playing time: {this.state.timeInGame}
                </Text>
              </Flex>
              <Text
                id="lvl"
                fontFamily="Bangers"
                marginRight={4}
                letterSpacing="widest"
                color="orange.300"
                fontSize="xl"
              >
                Level: {this.state.level}
              </Text>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-around" alignItems="flex-start" p={2}>
              <AccordionItem>
                <AccordionHeader backgroundColor="facebook.500" borderRadius="15px">
                  <Flex
                    textAlign="left"
                    color="whiteAlpha.900"
                    letterSpacing="widest"
                    fontSize="lg"
                  >
                    QuickPlay Statistics
            </Flex>
                  <AccordionIcon color="whiteAlpha.900" />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  <ProfilCharacter battleTag={this.state.battleTag} plateform={this.state.plateform} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader backgroundColor="facebook.500" borderRadius="15px">
                  <Box
                    flex="1"
                    textAlign="left"
                    color="whiteAlpha.900"
                    letterSpacing="widest"
                    fontSize="lg"
                  >
                    Total Medals

            </Box>
                  <AccordionIcon color="whiteAlpha.900" />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  <Flex backgroundColor="orange.500" borderRadius="15px" marginLeft={5}>
                    <Flex flexDirection="column" marginLeft={1} backgroundColor="orange.300" borderRadius="15px" m={1}>
                      <Flex flexDirection="column">
                        <Image
                          height="100px"
                          width="100px"
                          src="https://i.ya-webdesign.com/images/overwatch-gold-medal-png.png"
                          id="imgGold"
                        />
                        <Text
                          id="gold"
                          textAlign="center"
                          fontFamily="Bangers">Gold medals :</Text>
                        <Text
                          textAlign="center"
                          fontFamily="Bangers"
                        >
                          {this.state.gold}
                        </Text>
                      </Flex>
                      <Flex flexDirection="column">
                        <Image
                          height="100px"
                          width="100px"
                          src="https://cdn.discordapp.com/attachments/636567771785986089/694532685254623302/1585659850232.png"
                          id="imgSilver"
                        />
                        <Text
                          id="silver"
                          textAlign="center"
                          fontFamily="Bangers"
                        >
                          Silver medals :
                        </Text>
                        <Text
                          textAlign="center"
                          fontFamily="Bangers"
                        >
                          {this.state.silver}
                        </Text>
                      </Flex>
                      <Flex flexDirection="column">
                        <Image
                          height="100px"
                          width="100px"
                          src="https://cdn.discordapp.com/attachments/636567771785986089/694532734072389653/1585659670786.png"
                          id="imgBronze"
                        />
                        <Text
                          id="bronze"
                          textAlign="center"
                          fontFamily="Bangers"
                        >
                          Bronze medals :
                          </Text>
                        <Text textAlign="center" fontFamily="Bangers">{this.state.bronze}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Flex>
          </Flex >
        </AccordionPanel>

      </AccordionItem>
    </ThemeProvider >
  }
}



export default Profil
