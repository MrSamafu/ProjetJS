import React, { Component } from 'react';
import {
    Flex,
    FormControl,
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
            <Flex>
            <Popover>
                <PopoverTrigger>
                    <Input
                        placeholder="MrSamafu-2680"
                        borderRadius="5px"
                        opacity={1}
                        backgroundColor="gray.200"
                        w="200px"
                        mb={2}
                        
                    />
                </PopoverTrigger>
                <PopoverContent zIndex={4}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader letterSpacing="wide">How to use :</PopoverHeader>
                    <PopoverBody letterSpacing="wide">Write your BattleTag and find your plateform.<br />(MrSamafu#2780 -> MrSamafu-2780)</PopoverBody>
                </PopoverContent>
            </Popover>
                <Select
                    id="platformSelection"
                    placeholder="Platform"
                    w="120px"
                    mb={2}
                    ml={2}
                >
                    <option value="pc">PC</option>
                    <option value="xbl">XBOX</option>
                    <option value="psn">PS4</option>
                    <option value="nintendo-switch">Nintendo Switch</option>
                </Select>
                </Flex>
                <Button
                    backgroundColor="orange.300"
                    w="200px"
                    letterSpacing="widest"
                    mb={2}
                >
                    Find me!
                        </Button>
            <FormErrorMessage>Error message</FormErrorMessage>
        </Flex>
    }


}
export default SearchBar