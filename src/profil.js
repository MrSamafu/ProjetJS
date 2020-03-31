import React, { Component } from 'react';
import { ImageBackground } from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Text,
  Image,
  Flex
  
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
      <Flex flexDirection="column">
        <Flex justifyContent="space-around" backgroundColor="facebook.600" color="gray.400" fontWeight="bold" textAlign="left" fontSize="2xl" borderRadius="15px"  margin="10px"  pl={4}>
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
            <Flex flexDirection="column" marginLeft={1}>
              <Text id="playerName">{this.state.name}</Text>
              <Text id="lastlogin">Temps de jeux :{this.state.timeInGame}</Text>
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
            
            <Text id="lvl" >Level : {this.state.level}</Text>
            
          </Flex>
        </Flex>
        <Flex flexDirection="row" justifyContent="space-around" alignItems="flex-start">

          <ProfilCharacter />
          <Flex backgroundColor="gray.400" borderRadius="15px" marginLeft={5} >
            <Flex flexDirection="column" marginLeft={1} backgroundColor="orange.300" borderRadius="15px" margin={1}>
              <Flex flexDirection="column">
                <Image
                  height="100px"
                  width="100px"
                  src="https://i.ya-webdesign.com/images/overwatch-gold-medal-png.png"
                  id="imgGold"
                />
                <Text id="gold" textAlign="center">Gold medals :</Text>
                <Text textAlign="center" >{this.state.gold}</Text>
              </Flex>
              <Flex flexDirection="column">
                <Image
                  height="100px"
                  width="100px"
                  src="https://cdn.discordapp.com/attachments/636567771785986089/694532685254623302/1585659850232.png"
                  id="imgSilver"
                />
                <Text id="silver" textAlign="center">Silver Medals :</Text>
                <Text textAlign="center" >{this.state.silver}</Text>
              </Flex>
              <Flex flexDirection="column">
                <Image
                  height="100px"
                  width="100px"
                  src="https://cdn.discordapp.com/attachments/636567771785986089/694532734072389653/1585659670786.png"
                  id="imgBronze"
                />
                <Text id="bronze" textAlign="center">Bronze medals :</Text>
                <Text textAlign="center" >{this.state.bronze}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex >
    </ThemeProvider >
  }
}



export default Profil
