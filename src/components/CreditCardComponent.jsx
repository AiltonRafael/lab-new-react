import React from 'react';
import { 
    Box, 
    Text,
    Grid
} from '@chakra-ui/react'

export default function CreditCardComponent(props) {
    return (
            <Box 
            bg={props.bgColor}
            color={props.color}
            w='500px'
            h='200px'
            p='10px'
            border='1px'
            borderRadius='5px'
            borderColor='grey'
            d='grid'
            gridTemplateRows='repeat(3, 1fr)'
            >
                <Box 
                d='flex' 
                justifyContent='end' 
                alignItems='center'>
                    {props.type}
                </Box>

                <Box 
                d='flex' 
                justifyContent='center' 
                alignItems='center'>
                    <Text textAlign='center'> 
                        {props.number}
                    </Text>
                </Box>

                <Box
                d='flex' 
                justifyContent='start' 
                alignItems='center'>
                    <Text>
                        Expires {props.expirationMonth}/{props.expirationYear} {props.bank} <br />
                        {props.owner}
                    </Text>
                </Box>
            </Box>
    )
}
