import React, { Component } from 'react';
import {
  ThemeProvider,
  CSSReset,
  theme,
  Text,
  Image,
  Flex
} from '@chakra-ui/core'


class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Loading...",
      gold: "Loading...",
      silver: "Loading...",
      bronze: "Loading...",
      profilImg: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      levelIcon: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",
      level: "Loading...",
      CharacterName: [],
      CharacterImg: "https://www.freepnglogos.com/uploads/vintage-overwatch-logo-png-12.png",


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
            profilImg: result.icon,
            levelIcon: result.prestigeIcon,
            level: result.level
          });
          console.log(result);
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
      <Flex justifyContent="space-around">
        <Flex justifyContent="flex-end">
          <Image
            height="100px"
            width="100px"
            borderRadius="10px"
            src={this.state.profilImg}
            display="flex"
            id="imgPlayer"
          />
          <Flex flexDirection="column">
            <Text id="playerName">{this.state.name}</Text>
            <Text id="lastlogin">derniere connexion</Text>
          </Flex>
        </Flex>
        <Flex display="flex" justifyContent="flex-start">
          <Image
            height="110px"
            width="110px"
            src={this.state.levelImg}
            display="flex"
            id="imgLvl"
          />
          <Text id="lvl">Level : {this.state.level}</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" alignItems="flex-start">
        <Flex>
          <Image
            height="100px"
            width="100px"
            src="https://www.overbuff.com/assets/images/heroes/moira.png?v=eee943d"
            id="characterImg"
          />
          <Flex flexDirection="column">
            <Flex flexDirection="column">
              <Text id="nameCharacter">Nom du héro</Text>
              <Text id="lastPlayed">Dernière partie</Text>
            </Flex>
            <Flex>
              <Text id="quickScore">Score rapide</Text>
              <Text id="victory">Victoires</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDirection="column">
            <Image
              height="100px"
              width="100px"
              src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
              id="imgGold"
            />
            <Text id="gold">Gold medals : {this.state.gold}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Image
              height="100px"
              width="100px"
              src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
              id="imgSilver"
            />
            <Text id="silver">Silver Medals : {this.state.silver}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Image
              height="100px"
              width="100px"
              src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
              id="imgBronze"
            />
            <Text id="bronze">Bronze medals : {this.state.bronze}</Text>
          </Flex>
        </Flex>
      </Flex>
    </ThemeProvider>
  }
}



export default Profil
