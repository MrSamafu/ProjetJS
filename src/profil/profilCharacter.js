import React, { Component } from 'react';
import {
  Text,
  Image,
  Flex
} from '@chakra-ui/core'
import Donnee from "../ressources/profilRessources.js"

class ProfilCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},
      error: null,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.battleTag !== prevProps.battleTag || this.props.plateform !== prevProps.plateform) {
      fetch("https://ovrstat.com/stats/" + this.props.plateform + "/" + this.props.battleTag)
        .then(res => res.json())
        .then(
          (result) => {
            if (result.message =="Player not found" ||result.message =="Failed to retrieve player stats: Invalid platform") {
              return;
            }
            else {
              console.log(result.message);
              this.setState({
                name: result.quickPlayStats.careerStats
              });
              
            }
          });
  }
}

  render() {
    let tableauxDeDonnee = Object.keys(this.state.name);
    let screen = [];
    let count = -1;
    let picture;
    let name;
    for (let nameCharacter of tableauxDeDonnee) {
      picture = Donnee("pictureCharacter", count);
      name = Donnee("nameCharacter", count);
      screen[count] =
        <Flex backgroundColor="orange.500" borderRadius="15px" marginBottom={5} width="100%">
          <Flex backgroundColor="orange.300" borderRadius="15px" pr={4} margin={1} width="100%">
            <Flex>
              <Image
                height="150px"
                width="100px"
                src={picture}
                borderRadius="15px"
                marginTop="15px"
              />
              <Flex flexDirection="column" pl={4}>
                <Text backgroundColor="facebook.600" letterSpacing="widest" fontFamily="Bangers" color="whiteAlpha.900" textAlign="left" fontSize="2xl" borderRadius="15px" marginTop="15px" pl={4} >{name}</Text>
                <Text backgroundColor="facebook.600" fontFamily="Bangers" color="blue.300" marginTop="5px" borderRadius="15px" pl={4} >Playing time: {this.state.name[nameCharacter]["game"]["timePlayed"]}</Text>
                <Flex flexDirection="row" backgroundColor="facebook.600" color="red.300" marginTop="5px" marginBottom="5px" borderRadius="15px" padding={4} >
                  <Text fontFamily="Bangers" >Best damages: {this.state.name[nameCharacter]["best"]["allDamageDoneMostInGame"]}</Text>
                  <Text fontFamily="Bangers" pl={4} >Victories: {this.state.name[nameCharacter]["game"]["gamesWon"]}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      count++;
    }
    const listItems = screen.map((characterStats, index) =>
      <div key={index}>{characterStats}</div>);



    return <Flex flexDirection="column" >

      {listItems}
    </Flex>


  }
}



export default ProfilCharacter;