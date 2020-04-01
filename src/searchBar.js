import React, { Component } from 'react';
import {
    ThemeProvider,
    CSSReset,
    theme,
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
        return <Flex justifyContent="center">
                <FormControl
                    display="flex"
                    justifyContent="space-between"
                    alignItems="space-between"
                    flexDirection="column"
                >

                    <Popover>
                        <PopoverTrigger>
                            <Input
                                placeholder="MrSamafu-2680"
                                mt="15px"
                                borderRadius="5px"
                                opacity={1}
                                backgroundColor="gray.200"
                                w="200px"
                                mb="15px"
                            />
                        </PopoverTrigger>
                        <PopoverContent zIndex={4}>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>How to use :</PopoverHeader>
                            <PopoverBody>Write your BattleTag and find your plateform.<br />(MrSamafu#2780 -> MrSamafu-2780)</PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Flex flexDirection="column" alignItems="flex-end">
                        
                        <Select id="platformSelection" placeholder="Platform" w="120px" mb="15px">
                            <option value="pc">PC</option>
                            <option value="xbl">XBOX</option>
                            <option value="psn">PS4</option>
                            <option value="nintendo-switch">Nintendo-Switch</option>
                        </Select>
                        <Button backgroundColor="orange.300" w="200px">
                            Find !
                        </Button>
                    </Flex>
                    <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
            </Flex>
    }


}
export default SearchBar