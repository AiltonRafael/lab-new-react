import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

export default function ClickablePictureComponent(props) {
    console.log(props)
    return (
        <Box>
            <Image 
            src={props.img}
            alt='profile'
            />            
        </Box>
    )
}
