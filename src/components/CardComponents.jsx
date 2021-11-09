import React from 'react';
import { 
    Box, 
    Image,
    Text
} from '@chakra-ui/react'

export default function CardComponents(props) {
    return (
        <Box 
        w='50vh' 
        height='20vh' 
        borderRadius='1px' 
        border='1px' 
        borderStyle='solid' 
        d='flex' 
        alignItems='center'
        justifyContent='space-around'
        mt='10px'
        >
            <Box 
            justifyContent='center' 
            alignItems='center'
            ml='5px'
            > 
                <Image
                w='100%' 
                h='100%' 
                border='1px' 
                d='flex' 
                objectFit='cover' 
                alt='Profile'
                src={props.picture}
                />
            </Box>

            <Box ml='10px'>
                <Text>
                    <strong> Fist Name: </strong> {props.firstName}
                </Text>

                <Text>
                    <strong> Last Name: </strong> {props.lastName}
                </Text>

                <Text>
                    <strong> Gender: </strong> {props.gender}
                </Text>

                <Text>
                    <strong> Height: </strong> {props.height}
                </Text>
            </Box>
        </Box>
    )
}
