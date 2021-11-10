import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useState } from 'react';
export default function ClickablePictureComponent(props) {

    const [isToggle, isSetToggle] = useState(true);

    function handleClick(){
        isSetToggle(!isToggle)
    }

    return (
        <Box>
            <Image 
            src={isToggle ? props.img : props.imgClicked}
            alt='profile'
            onClick={handleClick}
            />            
        </Box>
    )
}
