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
  Button,
  Link,
  Image
} from '@chakra-ui/core'
import Profil from './profil.js'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      overflow="visible"
      width="100%"
      height="50%"
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50%"
      >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="100%%"
          height="100%"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%%"
            height="100%"
          >
            <Link href="https://playoverwatch.com/fr-fr/" target="_blank">
            <Image
              height="75px"
              width="75px"
              src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
              m={5}
            />
            </Link>
          </Flex>
          <Text
            fontFamily="Bangers"
            color="orange.300"
            letterSpacing="widest"
            fontSize="5xl"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Overview
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        border="100px"
        borderColor="orange.900"
      >
        <Profil />
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="50%"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Button
            m={5}
            backgroundColor="orange.300"
            color="whiteAlpha.900"
            letterSpacing="widest"
            width="200px"
            height="50px"
            borderRadius="25px"
            fontSize="lg"
          >
            Sign Up
          </Button>
          <Button
            m={5}
            backgroundColor="orange.300"
            color="whiteAlpha.900"
            letterSpacing="widest"
            height="50px"
            width="200px"
            borderRadius="25px"
            fontSize="lg"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
    </Flex>
    <Grid
      gap={6}
      templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        width="100%"
        height="100%"
        overflow="visible"
        backgroundColor="whiteAlpha.50"
      >
        <Box
          backgroundColor="facebook.900"
          shadow="sm"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            backgroundColor="facebook.300"
            width="75%"
            height="100px"
            borderRadius="25px"
            mt={5}
            mb={5}
            letterSpacing="widest"
          >
            <Heading
              size="md"
              as="h1"
              lineHeight="shorter"
              fontFamily="Bangers"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              overflow="visible"
              textAlign="center"
              letterSpacing="widest"
              color="orange.300"
              fontSize="3xl"
            >
              Tracer
            </Heading>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
            mb={5}
            color="facebook.900"
          >
            <Flex
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              backgroundColor="whiteAlpha.900"
              width="75%"
              height="100%"
              borderRadius="25px"
            >
              <Heading
                size="md"
                as="h1"
                fontFamily="heading"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                overflow="visible"
                textAlign="justify"
                letterSpacing="widest"
                fontSize="lg"
                width="75%"
                height="100%"
                m={5}
              >
                L’ancien agent d’Overwatch connu sous le pseudonyme de Tracer
                est une aventurière capable de se déplacer dans le temps et une
                force irrépressible au service du bien. Lena Oxton (nom de code
                « Tracer ») était la plus jeune recrue de toute l’histoire du
                programme de vol expérimental d’Overwatch. Ses talents de pilote
                et son intrépidité lui valurent d’être sélectionnée pour tester
                un prototype de chasseur-téléporteur, le Sillage.
                Malheureusement, la matrice de téléportation de l’avion eut une
                avarie lors du premier vol d’essai et disparut. Lena fut
                présumée morte. Elle finit par réapparaître des mois plus tard,
                profondément changée par l’épreuve qu’elle venait de traverser :
                sa structure moléculaire avait été désynchronisée par rapport à
                l’écoulement normal du temps. Souffrant de « chrono-dissociation
                », elle était devenue une sorte de fantôme vivant, disparaissant
                irrégulièrement pendant des heures ou des jours et incapable de
                maintenir sa consistance physique dans les rares moments où elle
                était présente. Les médecins et les chercheurs d’Overwatch
                étaient perplexes, et son cas semblait désespéré jusqu’à ce
                qu’un scientifique appelé Winston parvienne à concevoir le
                chrono-accélérateur, un appareil capable d’ancrer Tracer dans le
                présent. Cela permit également à Tracer de contrôler son propre
                flux temporel et de le ralentir ou de l’accélérer à volonté.
                Grâce à cette nouvelle compétence, elle devint l’un des agents
                les plus efficaces d’Overwatch. Depuis la dissolution de
                l’organisation, Tracer continue de lutter pour la bonne cause et
                de combattre les injustices dès qu’elle en a l’occasion.
              </Heading>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Grid>
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor="whiteAlpha.900"
      overflow="visible"
      width="100%"
      height="10%"
      position="scroll"
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%%"
        height="100%"
      >
        <Link href="https://playoverwatch.com/fr-fr/" target="_blank">
          <Image
            height="50px"
            width="50px"
            src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
            m={5}
          />
        </Link>
      </Flex>
      <Text
        letterSpacing="widest"
        fontSize="lg"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        2020 © Overview. All rights reserved.
      </Text>
    </Flex>
  </ThemeProvider>
)

export default App
