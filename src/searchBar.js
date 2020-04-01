import React, { Component } from 'react';
import {
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

class SearchBar extends Component {
    constructor() {
        super();
    }

    render() {
        return <Flex
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
                            placeholder="MrSamafu-2680"
                            borderRadius="5px"
                            opacity={1}
                            backgroundColor="gray.200"
                            w="50%"
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
                >
                    Find!
                        </Button>
            </Flex>
            <FormErrorMessage>Error message</FormErrorMessage>
        </Flex>
    }


}
export default SearchBar