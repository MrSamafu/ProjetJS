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
    Button
} from '@chakra-ui/core'

const Inscription = () => (
    <ThemeProvider theme={theme}>
        <CSSReset />

        <Heading
            as="h1"
            color="yellow.500"
            letterSpacing="wider"
            lineHeight="taller"
            textAlign="center"
        >
            Inscription
        </Heading>
        <InputGroup>
            <InputLeftAddon color="yellow.500" fontStyle="italic">
                Nom:
            </InputLeftAddon>
            <Input placeholder="Entrez votre Nom !" opacity={1} color="yellow.500" />
            <InputRightElement>
                <Icon name="check" color="yellow.500" />
            </InputRightElement>
        </InputGroup>
        <InputGroup mt={10} color="yellow.500">
            <InputLeftAddon fontStyle="italic">Pseudo :</InputLeftAddon>
            <Input placeholder="Entrez votre Pseudo !" />
            <InputRightElement>
                <Icon name="star" />
            </InputRightElement>
        </InputGroup>
        <InputGroup
            mt={10}
            fontStyle="italic"
            color="yellow.500"
            backgroundColor="yellow.900"
        >
            <InputLeftAddon>E-mail : </InputLeftAddon>
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
            <InputLeftAddon color="yellow.500">Mot de passe :</InputLeftAddon>
            <Input
                isFullWidth
                placeholder="Entrez votre mot de passe !"
                variant="outline"
                opacity={1}
                letterSpacing="widest"
                lineHeight="tall"
                color="yellow.500"
            />
            <InputRightElement>
                <Icon name="password" color="yellow.500" />
            </InputRightElement>
        </InputGroup>
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
            Inscription
        </Button>
    </ThemeProvider>
)

export default Inscription
