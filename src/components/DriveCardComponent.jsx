import React from 'react';
import { Box, Text, Grid } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import RatingComponent from './RatingComponent';

export default function DriveCardComponent(props) {
    console.log(props)
    return (
        <Grid
        templateColumns='repeat(2, 1fr)'
        justifyContent='center'
        alignItems='center'
        w='60vh'
        h='200px'
        bg='#455EB5'
        mt='10px'
        borderRadius='10px'
        color='white'
        >
        <Box
        d='flex'
        justifyContent='center'
        alignItems='center'
        > 
            <Box
            d='flex'
            borderRadius='50vh'
            w='40%'
            h='80%'
            >
                <Image 
                borderRadius='50%'
                w='100px'
                h='100px'
                src={props.img} 
                alt='profile'
                objectFit='cover'
                />
            </Box>
        </Box>

        <Box>
            <Box 
             d='flex'
             justifyContent='center'
             alignItems='center'
            >
                <Text> 
                    {props.name}
                </Text>

                <RatingComponent />
            </Box>

            <Box
            justifyContent='center' 
            textAlign='center'
            >
                <Text>
                    {props.car.model}
                </Text>

                <Text>
                    {props.car.licensePlate}
                </Text>
            </Box>
        </Box>    
        </Grid>
    )
}
