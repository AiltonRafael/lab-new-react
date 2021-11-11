import React, { useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

export default function CarouselComponent(props) {
    const [index, setIndex] = useState(0)
    function handleClick(arrowDirection){
        if(arrowDirection === 'arrowLeft'){
            if(index < props.imgs.length && index > 0){ 
                setIndex(index - 1)
            } else {setIndex(props.imgs.length-1)}
        } else if(arrowDirection === 'arrowRight'){
            if(index < props.imgs.length-1){
                setIndex(index + 1)
            } else {setIndex(0)}
        }
    }

    return (
        <Box 
        d='flex'
        flexDir='column'
        justifyContent='space-betwen'
        alignItems='center'
        border='1px'
        h='400px'
        w='20%'
        mt='10px'
        >
            <Box
            border='1px'
            w='100%'
            h='80%'
            >
                <Image 
                src={props.imgs[index]}
                h='100%'
                w='100%'
                objectFit='contain'
                />
            </Box>

            <Box
            mt='10px'
            d='flex'
            w='100%'
            p='10px'
            gridGap='40px'
            >
                <Button 
                w='50%'
                onClick={() => handleClick('arrowLeft')}
                >
                    <ArrowLeftIcon />
                </Button>

                <Button 
                w='50%'
                onClick={() => handleClick('arrowRight')}
                >
                    <ArrowRightIcon />
                </Button>
            </Box>
            
        </Box>
    )
}
