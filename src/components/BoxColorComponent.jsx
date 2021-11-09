import { Box } from '@chakra-ui/layout';
import React from 'react';

export default function BoxColorComponent(props) {
    return (
        <Box 
        w='50vh' 
        h='15vh' 
        bg={props.color} 
        border='1px' 
        borderStyle='solid'
        borderColor='#000'
        mt='10px'
        d='flex'
        justifyContent='center'
        alignItems='center'
        textColor={props.textColor}
        >
            {props.color}
        </Box>
    )
}
