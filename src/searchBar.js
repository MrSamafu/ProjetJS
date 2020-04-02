import React, { Component } from 'react';
import {
    Grid,
    Box,
    Heading,
    Flex,
    Input,
    FormErrorMessage,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Select,
} from '@chakra-ui/core'
import Profil from "./profil"


class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            battleTag: "",
            plateform: "pc",
            search: false,
            tmpBattleTag:"",
            tmpPlateform:"pc"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        if (event.target.id === "searchBar") {
            this.setState({ tmpBattleTag: event.target.value });

        }
        else if (event.target.id === "platformSelection") {
            this.setState({ tmpPlateform: event.target.value });
        }
        

    }

    handleSubmit(event) {
        this.setState({
            battleTag: this.state.tmpBattleTag,
            plateform: this.state.tmpPlateform
        })
        console.log("searchBar preprops = "+this.state.search)
        event.preventDefault();

    }


    render() {
        return <Grid
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
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        width="85%"
                    >
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="row"
                            width="100%"
                            mb={2}
                        >
                            <Popover>
                                <PopoverTrigger>
                                    <Input
                                        id="searchBar"
                                        type="text"
                                        placeholder="MrSamafu-2680"
                                        borderRadius="5px"
                                        opacity={1}
                                        backgroundColor="gray.200"
                                        w="50%"
                                        mr={2}
                                        value={this.state.tmpBattleTag}
                                        onChange={this.handleChange}
                                    />
                                </PopoverTrigger>
                                <PopoverContent zIndex={4}>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader letterSpacing="wide">How to use:</PopoverHeader>
                                    <PopoverBody letterSpacing="wide">Write your BattleTag and find your plateform.<br />(<u><b>Example:</b></u> MrSamafu#2780 -> MrSamafu-2780)</PopoverBody>
                                </PopoverContent>
                            </Popover>
                            <Select
                                id="platformSelection"
                                placeholder="Platforms"
                                w="50%"
                                letterSpacing="wide"
                                onChange={this.handleChange}
                            >
                                <option value="pc">PC</option>
                                <option value="xbl">XBOX</option>
                                <option value="psn">PS4</option>
                                <option value="nintendo-switch">Nintendo Switch</option>
                            </Select>
                        </Flex>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="row"
                            w="100%"
                        >
                            <Button
                                backgroundColor="orange.300"
                                w="100%"
                                letterSpacing="widest"
                                variantColor="yellow"
                                color="whiteAlpha.900"
                                mb={5}
                                onClick={this.handleSubmit}
                            >
                                Find!
                        </Button>

                        </Flex>
                        <FormErrorMessage>Error message</FormErrorMessage>
                    </Flex>
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

                            <Profil battleTag={this.state.battleTag} plateform={this.state.plateform}/>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Grid>


    }


}
export default SearchBar