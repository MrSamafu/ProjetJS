import React, { Component } from 'react';
import {
  ThemeProvider,
  CSSReset,
  theme,
  Text,
  Image,
  Flex
} from '@chakra-ui/core'
import Donnee from "./ressources/profilRessources.js"

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
    let picture;
    let name;
    for (let nameCharacter of tableauxDeDonnee) {
      picture = Donnee("pictureCharacter",count);
      name = Donnee("nameCharacter",count);
      screen[count] =
      <Flex backgroundColor="gray.400" borderRadius="15px" marginBottom={5}>
        <Flex backgroundColor="orange.300" borderRadius="15px" pr={4} margin={1}>
          <Flex>
            <Image
              height="150px"
              width="100px"
              src={picture}
              borderRadius="15px"
              marginTop="15px"
            />
            <Flex flexDirection="column" pl={4}>
              <Text backgroundColor="facebook.600" color="gray.400" fontWeight="bold" textAlign="left" fontSize="2xl" borderRadius="15px"  marginTop="15px" pl={4} >{name}</Text>
              <Text backgroundColor="facebook.600" color="gray.400" marginTop="5px" borderRadius="15px" pl={4} >Temps de jeu : {this.state.name[nameCharacter]["game"]["timePlayed"]}</Text>
              <Flex flexDirection="row"  backgroundColor="facebook.600" color="gray.400" marginTop="5px" marginBottom="5px" borderRadius="15px" padding={4} >
                <Text>Best Dommage : {this.state.name[nameCharacter]["best"]["allDamageDoneMostInGame"]}</Text>
                <Text pl={4} >Victoires : {this.state.name[nameCharacter]["game"]["gamesWon"]}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        </Flex>
      count++;
    }
    const listItems = screen.map((characterStats) =>
      <div>{characterStats}</div>);



    return <Flex flexDirection="column" >

      {listItems}
    </Flex>


  }
}

export default ProfilCharacter;