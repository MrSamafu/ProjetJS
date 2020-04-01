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
    constructor(props) {
        super(props);
        this.state = {
            battleTag: "",
            plateform: "pc"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        console.log(event.target.id);
        
        if(event.target.id == "searchBar"){
           this.setState({ battleTag: event.target.value }); 
        }
        else if(event.target.id == "platformSelection"){
            this.setState({plateform: event.target.value });
        }
        
    }

    handleSubmit(event) {
        console.log(this.state.battleTag);
        console.log(this.state.plateform);
        event.preventDefault();
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
                            id="searchBar"
                            type="text"
                            placeholder="MrSamafu-2680"
                            borderRadius="5px"
                            opacity={1}
                            backgroundColor="gray.200"
                            w="200px"
                            mb={2}
                            value={this.state.battleTag}
                            onChange={this.handleChange}

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
                    onChange={this.handleChange}
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
                onClick={this.handleSubmit}
            >
                Find me!
                        </Button>
            <FormErrorMessage>Error message</FormErrorMessage>
        </Flex>
    }


}
export default SearchBar