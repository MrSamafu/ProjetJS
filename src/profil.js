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
  Box

} from '@chakra-ui/core'
import ProfilCharacter from "./profilCharacter.js"

class Profil extends Component {
  constructor() {
    super();
    this.state = {
      profil: "Your profil",
      name: "Loading...",
      gold: "Loading...",
      silver: "Loading...",
      bronze: "Loading...",
      timeInGame: "Loading...",
      profilImg: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      levelIcon: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      level: "Loading...",
      error: "none",
      battleTag: '',
      plateform: 'pc',
      search: false,
      notFound: "block"

    };



  }

  componentDidUpdate(prevProps) {
    if (this.props.battleTag !== prevProps.battleTag || this.props.plateform !== prevProps.plateform) {
      if (this.props.battleTag === "") {
        this.setState({
          notFound: "none",
          error: "block",
          profil: "Search is empty"
        })

        return;
      }
      console.log(this.props);
        fetch("https://ovrstat.com/stats/" + this.props.plateform + "/" + this.props.battleTag)
        .then(res => res.json())
        .then(
          (result) => {
            if(result.message === "Player not found"){
              this.setState({
                notFound: "none",
                error: "block",
                profil: "Player not found"
              })
              return;
            }else{
              this.setState({
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
            
            
            console.log("https://ovrstat.com/stats/" + this.props.plateform + "/" + this.props.battleTag);
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
            w="100%"
          >
            {this.state.profil}
          </Flex>
          <AccordionIcon color="whiteAlpha.900" />
        </AccordionHeader>
        <AccordionPanel>
          <Flex flexDirection="column" w="100%">
            <Flex justifyContent="space-around"
              backgroundColor="facebook.500"
              color="whiteAlpha.900"
              textAlign="left"
              fontSize="2xl"
              borderRadius="15px"
              mb={2}
              w="100%"
            >
              <Flex justifyContent="flex-end">
                <Flex
                  flexDirection="column"
                  w="35%"
                >
                  <Image
                    display="flex"
                    height="100px"
                    width="150px"
                    borderRadius="15px"
                    src={this.state.profilImg}
                    id="imgPlayer"
                    m={2}
                  />
                </Flex>
                <Flex
                  flexDirection="column"
                  w="65%"
                >
                  <Text id="playerName">{this.state.name}</Text>
                  <Text
                    id="lastlogin"
                    fontFamily="Bangers"
                    letterSpacing="widest"
                    color="blue.300"
                    fontSize="xl"
                  >
                    Playing time: {this.state.timeInGame}
                  </Text>
                </Flex>

                <Flex>
                  <Image
                    height="100%"
                    width="100%"
                    src={this.state.levelIcon}
                    display="flex"
                    id="imgLvl"
                  />
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
            </Flex>
            <Flex flexDirection="row" justifyContent="space-around" alignItems="flex-start">
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
                  <ProfilCharacter battleTag={this.state.battleTag} plateform={this.state.plateform}/>
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
