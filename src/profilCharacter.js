import React, { Component } from 'react';
import {
  ThemeProvider,
  CSSReset,
  theme,
  Text,
  Image,
  Flex
} from '@chakra-ui/core'

class ProfilCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},




      error: null,

    }
  }

  componentDidMount() {
    fetch("https://ovrstat.com/stats/pc/MrSamafu-2680")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            name: result.quickPlayStats.careerStats
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
    let tableauxDeDonnee = Object.keys(this.state.name);
    let screen = [];
    let count = -1;
    for (let nameCharacter of tableauxDeDonnee) {
      console.log(this.state.name[nameCharacter])

      screen[count] = 
      <Flex>
      <Flex>
        <Image
          height="100px"
          width="100px"
          src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
        />
        <Flex flexDirection="column">
          <Text>Nom du héros</Text>
          <Text>Temps de jeu : {this.state.name[nameCharacter]["game"]["timePlayed"]}</Text>
          <Flex>
            <Text>Meilleur score Dommage : {this.state.name[nameCharacter]["best"]["allDamageDoneMostInGame"]}</Text>
            <Text>Victoires : {this.state.name[nameCharacter]["game"]["gamesWon"]}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
      count++;
    }
    const listItems = screen.map((characterStats) =>
      <div>{characterStats}</div>);
              
              
            
      return <Flex flexDirection="column" alignItems="">
      
      {listItems}
    </Flex>
   

  }
}

export default ProfilCharacter;