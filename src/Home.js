import React from 'react'
import {
    ThemeProvider,
    CSSReset,
    theme,
    Grid,
    Flex,
    Box,
    Text,
    Heading,
    Button,
    Image
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import SearchBar from './searchBar'
import Profil from './profil'

const Home = () => (
    <ThemeProvider theme={theme}>
        <CSSReset />
        <Flex // Header
            backgroundColor="gray.100"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            overflow="visible"
            width="100%"
            height="20%"
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                width="75%"
                height="100%"
            >
                <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        width="25%"
                        height="100%"
                    >
                        <Image // Logo Overwatch
                            width="25%"
                            src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        />
                    </Flex>
                    <Flex width="75%" height="100%" p={5}>
                        <Text
                            fontFamily="Bangers"
                            textAlign="center"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            fontSize="5xl"
                            color="orange.300"
                            width="100%"
                            height="100%"
                        >
                            Overview
                            </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="25%"
                height="100%"
                m={5}
            >

                <Flex
                    justifyContent="center"
                    alignItems="center"
                    p={5}
                    height="100%"
                    width="140px"
                    flexDirection="column"
                >
                    <Link to="/register">
                        <Button
                            m={3}
                            backgroundColor="orange.300"
                            color="whiteAlpha.900"
                            letterSpacing="widest"
                            h="50px"
                            w="100%"
                            borderRadius="10px"
                            fontSize="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            size="md"
                            variantColor="yellow"
                            flexDirection="column"
                            textAlign="center"
                        >
                            Sign Up
          </Button>
                    </Link>
                    <Link to="/login">
                        <Button
                            m={3}
                            backgroundColor="orange.300"
                            color="whiteAlpha.900"
                            letterSpacing="widest"
                            h="50px"
                            w="100%"
                            borderRadius="10px"
                            fontSize="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            variant="solid"
                            variantColor="yellow"
                            flexDirection="column"
                        >
                            Login
          </Button>
                    </Link>
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
                        width="85%"
                        height="100px"
                        borderRadius="25px"
                        mt={5}
                        mb={5}
                        letterSpacing="widest"
                    >
                        <Heading // Titre du contenu
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
                            fontSize="4xl"
                        >
                            Home
            </Heading>
                    </Flex>
                    <SearchBar />
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                        width="85%"
                        mb={5}
                        color="facebook.900"
                    >
                        <Flex
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                            backgroundColor="whiteAlpha.900"
                            width="100%"
                            height="100%"
                            borderRadius="25px"
                            p={5}
                        >

                            <Profil />
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Grid>
        <Flex // Footer
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            backgroundColor="gray.100"
            overflow="visible"
            width="100%"
            height="10%"
            position="scroll"
            bottom="0"
        >
            <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                width="25%"
                height="100%"
            >
                <Image
                    height="35px"
                    width="35px"
                    src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
                    m={5}
                />
            </Flex>
            <Text
                letterSpacing="widest"
                fontSize="100%"
                width="75%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                2020 © Overview. All rights reserved.
      </Text>
            <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                width="25%"
                height="100%"
            >
                <Image
                    height="35px"
                    width="35px"
                    src="https://www.stickpng.com/assets/images/586273b931349e0568ad89df.png"
                    m={5}
                />
            </Flex>
        </Flex>
    </ThemeProvider>
)

export default Home