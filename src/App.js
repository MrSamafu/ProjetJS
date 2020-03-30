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
    <Grid
      p={10}
      gap={6}
      templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          backgroundColor="white"
          borderRadius="lg"
          shadow="sm"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            backgroundColor="facebook.900"
            width="100%"
            height="100px"
            borderRadius="25px"
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
              textAlign="left"
              backgroundColor="facebook.900"
              color="orange.300"
              fontSize="3xl"
            >
              Inspector
            </Heading>
          </Flex>
          <Stack
            shouldWrapChildren
            spacing={4}
            ml={4}
            mt={4}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Stack shouldWrapChildren spacing={2}>
              <Tag size="md" variant="subtle" variantColor="yellow">
                Update props & style
              </Tag>
              <Text fontSize="md" color="gray.600">
                On the right hand side, you can find the inspectror panel. You
                will find the tools to edit the component's props and style.
              </Text>
              <Tag>Tag name</Tag>
            </Stack>
            <Stack shouldWrapChildren spacing={2}>
              <Tag size="md" variant="subtle" variantColor="yellow">
                Delete, reset and read doc
              </Tag>
              <Text color="gray.600">
                Reach the yellow bar on the top to delete, reset and access the
                Chakra doc of each component.
              </Text>
            </Stack>
            <Stack spacing={2} shouldWrapChildren>
              <Tag size="md" variant="subtle" variantColor="yellow">
                Sort components
              </Tag>
              <Text color="gray.600">
                By clicking on a component containing children, you will see a
                Children panel appearing on the right. It enables sorting the
                children.{' '}
              </Text>
            </Stack>
            <Stack spacing={2} shouldWrapChildren>
              <Tag size="md" variant="subtle" variantColor="yellow">
                Sort components
              </Tag>
              <Text color="gray.600">
                By clicking on a component containing children, you will see a
                Children panel appearing on the right. It enables sorting the
                children.{' '}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Grid>
  </ThemeProvider>
)

export default Home;
