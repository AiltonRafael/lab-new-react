import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { useState } from 'react'
import React from 'react'
import dice1 from '../assets/images/img/dice1.png'
import dice2 from '../assets/images/img/dice2.png'
import dice3 from '../assets/images/img/dice3.png'
import dice4 from '../assets/images/img/dice4.png'
import dice5 from '../assets/images/img/dice5.png'
import dice6 from '../assets/images/img/dice6.png'
import diceEmpty from '../assets/images/img/dice-empty.png'

const arrDice = [dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty];


export default function DiceComponent() {
    const [randomIndexArrDice, setRandomIndexArrDice] = useState([arrDice[6]])

    function getRandomSideOfDice(){
        let i = Math.floor(Math.random()*arrDice.length)
        setRandomIndexArrDice(arrDice[i])
    }

    return (
        <Box
        w='100px'
        >
            <Image 
            src={randomIndexArrDice}
            alt='dice'
            onClick={getRandomSideOfDice}
            />
        </Box>
    )
}
