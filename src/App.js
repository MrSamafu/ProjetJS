import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  Box,
  Text,
  Tag,
  Heading,
  Image
} from '@chakra-ui/core'
import Profil from './profil.js'

const Home = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={0}
      backgroundColor="facebook.900"
      p={5}
      overflow="visible"
      width="100%"
      height="20vh"
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        backgroundColor="facebook.900"
        width="100%%"
        height="100%"
        p={0}
        m={0}
      >
        <Flex
          justifyContent="center"
          width="100%"
          alignItems="center"
          flexDirection="row"
          height="100%"
        >
          <Image
            height="10vh"
            width="10vh"
            src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
          />
        </Flex>
        <Flex
          justifyContent="center"
          width="100%%"
          alignItems="center"
          flexDirection="row"
          height="100%"
          mr={0}
          pr={0}
          backgroundColor="facebook.900"
        >
          <Text
            fontFamily="Bangers"
            fontSize="5xl"
            color="orange.300"
            m={5}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            OVERVIEW
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Profil />
  </ThemeProvider>
)

export default Home;
