import React from 'react';
import { Box } from '@chakra-ui/react'

export default function GreetingsComponent(props) {
    if(props.lang === 'en'){
        return (
        <Box border='1px' w='50vh' mt='10px'> 
            Hello, {props.children} 
        </Box>)
    } else if (props.lang === 'de'){
        return (
        <Box border='1px' w='50vh' mt='10px'> 
            Hallo, {props.children} 
        </Box>)

    } else if(props.lang === 'fr'){
        return (
        <Box border='1px' w='50vh' mt='10px'> 
            Bonjour, {props.children} 
        </Box>
        )
    } else if(props.lang === 'es'){
        return (
        <Box border='1px' w='50vh' mt='10px'> 
            Olá, {props.children} 
        </Box>)
    }

}
