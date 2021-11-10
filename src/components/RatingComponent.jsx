import React from 'react';
import { Box } from '@chakra-ui/layout';

export default function RatingComponent(props) {
   let rating = Math.floor(props.children)
   
   switch (rating) {
     case 0:
          return <Box> ☆☆☆☆☆ </Box>;
          break;
     case 1:
          return <Box> ★☆☆☆☆ </Box>;
          break;
     case 2: 
          return <Box> ★★☆☆☆ </Box>;
          break;
     case 3:
          return <Box> ★★★☆☆ </Box>;
          break;
     case 4:
          return <Box> ★★★★☆ </Box>;
          break;
     case 5:
          return <Box> ★★★★★ </Box>;
          break;
     default: 
          return 0
          
   }
    
}
