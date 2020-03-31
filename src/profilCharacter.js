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

      screen[count] = <div>
        <Image
          height="100px"
          width="100px"
          src="https://www.overbuff.com/assets/images/heroes/moira.png?v=eee943d"
          id="characterImg"
        />
        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Text id="nameCharacter">Nom du héros</Text>
            <Text id="lastPlayed">Temps de jeu : {this.state.name[nameCharacter]["game"]["timePlayed"]}</Text>
          </Flex>
          <Flex>
            <Text id="quickScore">Meilleur score Dommage : {this.state.name[nameCharacter]["best"]["allDamageDoneMostInGame"]}</Text>
            <Text id="victory">Victoires : {this.state.name[nameCharacter]["game"]["gamesWon"]}</Text>
          </Flex>
        </Flex>
      </div>
      count++;
    }
    const listItems = screen.map((characterStats) =>
      <div>{characterStats}</div>);
              
              
            
      return <Flex>
      <Flex>
      {listItems}
    </Flex>
    </Flex> 

  }
}

export default ProfilCharacter;