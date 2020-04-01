import React, { Component } from 'react';
import {
    Text,
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
        if(event.target.id === "searchBar"){
           this.setState({ battleTag: event.target.value });
           
        }
        else if(event.target.id === "platformSelection"){
            this.setState({plateform: event.target.value });
        }
        
    }

    handleSubmit(event) {
        console.log(this.state.battleTag);
        console.log(this.state.plateform);
        event.preventDefault();
        return <div>
            <Text id="Facing">
                Nom : + {this.state.battleTag} + et la plateform + {this.state.plateform}
            </Text>
        </div>
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
                            id="searchBar"
                            type="text"
                            placeholder="MrSamafu-2680"
                            borderRadius="5px"
                            opacity={1}
                            backgroundColor="gray.200"
                            w="50%"
                            mr={2}
                            value={this.state.battleTag}
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
    }


}
export default SearchBar