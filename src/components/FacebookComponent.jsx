import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';

export default function FacebookComponent(props) {
    const [selectCountry, setSelectCountry] = useState('')

    let arrCountry = [];
    let sortedArrCountry = [];

    props.data.forEach((element) => {
        arrCountry.push(element.country)
    })

    sortedArrCountry = [...new Set(arrCountry)]

    function handleSort(country){
            setSelectCountry(country)
    }

    console.log(props)

    return (
        <div>
            <Box
            d='flex'
            flexWrap='wrap'
            w='50vh'
            mt='10px'
            > 
                {sortedArrCountry.map((country) => {
                    return(
                    <Button 
                    w='100px'
                    ml='10px'
                    key={country}
                    onClick={() => handleSort(country)}
                    >
                        {country}

                    </Button>)
                })}
                
            </Box>
        
            {props.data.map((element, index) => {
                return(
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
                className={element.country}
                key={index}
                bg={element.country === selectCountry ? '#A3D2E2' : 'white'}
                >
                    <Box 
                    justifyContent='center' 
                    alignItems='center'
                    ml='5px'
                    w='100%'
                    h='100%'
                    > 
                        <Image
                        w='60%' 
                        h='100%' 
                        border='1px' 
                        d='flex' 
                        objectFit='contain' 
                        alt='Profile'
                        src={element.img}
                        />
                    </Box>
        
                    <Box 
                    w='50%'
                    ml='10px'>
                        <Text>
                            <strong> Fist Name: </strong> {element.firstName}
                        </Text>
        
                        <Text>
                            <strong> Last Name: </strong> {element.lastName}
                        </Text>
        
                        <Text>
                            <strong> Country: </strong> {element.country}
                        </Text>
        
                        <Text>
                            <strong> Type: </strong> {element.isStudent ? 'Student': 'Teacher'}
                        </Text>
                    </Box>
                </Box>
                )
            })}
        </div>

    )
}
