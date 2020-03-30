import React from 'react'
import {
    ThemeProvider,
    CSSReset,
    theme,
    Icon,
    Heading,
    InputGroup,
    InputLeftAddon,
    Input,
    InputRightElement,
    Checkbox,
    Button
} from '@chakra-ui/core'

const Login = () => (
    <ThemeProvider theme={theme}>
        <CSSReset />
        <Icon name="copy" fontSize="4xl" backgroundColor="whiteAlpha.500" />
        <Heading
            as="h1"
            color="yellow.500"
            letterSpacing="wider"
            lineHeight="taller"
            textAlign="center"
        >
            Connexion
    </Heading>
        <InputGroup />
        <InputGroup
            mt={10}
            fontStyle="italic"
            color="yellow.500"
            backgroundColor="yellow.900"
        >
            <InputLeftAddon>Email: </InputLeftAddon>
            <Input placeholder="Entrez votre email !" letterSpacing="widest" />
            <InputRightElement>
                <Icon name="email" />
            </InputRightElement>
        </InputGroup>
        <InputGroup
            mt={10}
            textAlign="left"
            fontStyle="italic"
            letterSpacing="wide"
            backgroundColor="gray.900"
        >
            <InputLeftAddon color="yellow.500">Password:</InputLeftAddon>
            <Input
                isFullWidth
                placeholder="Entrez votre mot de passe !"
                variant="outline"
                opacity={1}
                letterSpacing="widest"
                lineHeight="tall"
            />
            <InputRightElement>
                <Icon name="password" color="yellow.500" />
            </InputRightElement>
        </InputGroup>
        <Checkbox
            isReadOnly
            variantColor="yellow"
            color="yellow.500"
            fontStyle="italic"
            textAlign="center"
            height={10}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mt={10}
        >
            Vérification..
    </Checkbox>
        <Button
            fontStyle="italic"
            textAlign="justify"
            color="yellow.500"
            mt={10}
            display="flex"
            rightIcon="arrow-forward"
            justifyContent="center"
            borderRadius={10}
            flexDirection="row"
            alignItems="stretch"
            pr={2}
            variant="solid"
        >
            Connexion
    </Button>
    </ThemeProvider>
)

export default Login
