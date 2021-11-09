import React from 'react';
import { Box } from '@chakra-ui/layout';

export default function RandomComponent(props) {
    return (
        <Box border='1px' w='50vh' mt='10px'> 
            Random value between {props.min} and {props.max} = {Math.floor(Math.random()*props.max)}
        </Box>
    )
}
