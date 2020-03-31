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
  constructor(props) {
    super(props);
    this.state = {
      name: "Loading...",
      gold: "Loading...",
      silver: "Loading...",
      bronze: "Loading...",
      timeInGame: "Loading...",
      profilImg: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      levelIcon: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      level: "Loading...",
      error: null,

    }
  }

  componentDidMount() {
    fetch("https://ovrstat.com/stats/pc/MrSamafu-2680")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            name: result.name,
            gold: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsGold,
            silver: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsSilver,
            bronze: result.quickPlayStats.careerStats.allHeroes.matchAwards.medalsBronze,
            timeInGame: result.quickPlayStats.careerStats.allHeroes.game.timePlayed,
            profilImg: result.icon,
            levelIcon: result.prestigeIcon,
            level: result.level,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return <ThemeProvider theme={theme}>
      <CSSReset />
      <AccordionItem>
        <AccordionHeader
          backgroundColor="facebook.500"
          borderRadius="20px"
        >
          <Box
            flex="1"
            textAlign="left"
            color="whiteAlpha.900"
            letterSpacing="widest"
            fontSize="xl"
          >
            Your Profile
          </Box>
          <AccordionIcon color="gray.400" />
        </AccordionHeader>
        <AccordionPanel pb={4}>
          <Flex flexDirection="column">
            <Flex justifyContent="space-around"
              backgroundColor="facebook.500"
              color="whiteAlpha.900"
              textAlign="left"
              fontSize="2xl"
              borderRadius="15px"
              m="10px"
              pl={4}
            >
              <Flex justifyContent="flex-end">
                <Image
                  height="100px"
                  width="100px"
                  borderRadius="10px"
                  src={this.state.profilImg}
                  display="flex"
                  id="imgPlayer"
                  marginTop={1}
                />
                <Flex
                  flexDirection="column"
                  marginLeft={1}
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
              </Flex>
              <Flex display="flex" justifyContent="flex-start">
                <Image
                  height="110px"
                  width="110px"
                  src={this.state.levelIcon}
                  display="flex"
                  id="imgLvl"
                />

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
                  <Box
                    flex="1"
                    textAlign="left"
                    color="whiteAlpha.900"
                    letterSpacing="widest"
                    fontSize="lg"
                  >
                    QuickPlay Statistics

            </Box>
                  <AccordionIcon color="gray.300" />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  <ProfilCharacter />
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
                  <Flex backgroundColor="orange.500" borderRadius="15px" marginLeft={5} >
                    <Flex flexDirection="column" marginLeft={1} backgroundColor="orange.300" borderRadius="15px" margin={1}>
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
