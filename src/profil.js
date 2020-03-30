import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Text,
  AccordionIcon,
  Image,
  Flex
} from '@chakra-ui/core'

const Profil = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Flex justifyContent="space-around">
      <Flex justifyContent="flex-end">
        <Image
          height="100px"
          width="100px"
          src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
          display="flex"
          id="imgPlayer"
        />
        <Flex flexDirection="column">
          <Text id="playerName">Nom Joueur</Text>
          <Text id="lastlogin">derniere connexion</Text>
        </Flex>
      </Flex>
      <Flex display="flex" justifyContent="flex-start">
        <Image
          height="100px"
          width="100px"
          src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
          display="flex"
          id="imgLvl"
        />
        <Text id="lvl">Level</Text>
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
            <Text id="nameCharacter">Nom perso</Text>
            <Text id="lastPlayed">derniere partie</Text>
          </Flex>
          <Flex>
            <Text id="quickScore">Quick score</Text>
            <Text id="victory">victoires</Text>
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
          <Text id="gold">Gold medals</Text>
        </Flex>
        <Flex flexDirection="column">
          <Image
            height="100px"
            width="100px"
            src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
            id="imgSilver"
          />
          <Text id="silver">Silver Medals</Text>
        </Flex>
        <Flex flexDirection="column">
          <Image
            height="100px"
            width="100px"
            src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png"
            id="imgBronze"
          />
          <Text id="bronze">Bronze medals</Text>
        </Flex>
      </Flex>
    </Flex>
  </ThemeProvider>
)

export default Profil;
