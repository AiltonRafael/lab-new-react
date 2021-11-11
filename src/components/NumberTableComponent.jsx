import React from 'react';
import { Box, Grid } from '@chakra-ui/layout';

export default function NumberTableComponent(props) {
    console.log(props)
    let arr = [];

    for(let i = 1; i <= props.limit; i++){
        arr.push(i)
    };

    {console.log(arr)}



    return (
        <Box
        d='flex'
        w='50%'
        mt='10px'
        gridGap='10px'
        textAlign='center'
        > 
            {arr.map((element)=> {
                return <Box w='100%' bg={element % 2 === 0 ? 'white' : 'red'} key={element}> {element} </Box>
            })}
        </Box>
    )

}
