import React from 'react';
import { Button } from '@chakra-ui/button';
import { useState } from 'react';

export default function LikeButtonComponent(props) {
    console.log(props.color.length)
    const [like, setLikes] = useState(0);
    const [indexColorArr, setIndexColor] = useState(0) 

    function handleLikes(){
        setLikes(like + 1)
        if(indexColorArr > props.color.length-1) {
            setIndexColor(0)
        } else {setIndexColor(indexColorArr + 1)}

        console.log(indexColorArr)
    }

    return (
        <Button 
        onClick={handleLikes}
        bg={props.color[indexColorArr]}
        color='white'
        _hover='null'
        >
            {like} {like === 1 ? 'like ': 'likes'}

        </Button>
    )
}
