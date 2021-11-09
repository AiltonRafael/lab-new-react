import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

export default function RatingComponent(props) {
   let rating = Math.floor(props.children)
    
   if(rating === 1 ){
        return <FontAwesomeIcon icon={faStar}/>
   } else if(rating === 2) {
    return (<FontAwesomeIcon icon={faStar}/>, <FontAwesomeIcon icon={faStar}/>)
   }

    return <FontAwesomeIcon icon={faStar}/>
    
}
