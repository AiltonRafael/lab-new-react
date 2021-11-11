import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import React, {useState} from 'react';

export default function FormComponent() {
    const [bgInputColorEmail, setBgInputColorEmail] = useState()
    const [emailValue, setEmailValue] = useState()

    const [bgInputColorPassword, setBgInputColorPassword] = useState()

    function handleColor(type, emailValue){
        if(type === 'email'){
                if(!emailValue){
                        setBgInputColorEmail('red')
                    }  
        }
    }
    
    return (
    <Box 
    mt='20px'
    d='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    gridGap='10px'
    >
        <FormControl id="first-name" isRequired>
            <Input borderColor={bgInputColorEmail} placeholder="Email" type='email' value={emailValue} onChange={() => handleColor('email', emailValue)}/>
            <Input borderColor={bgInputColorPassword} placeholder="Password" type='password' onChange={() => handleColor('password')} />
            <Input placeholder="First name" />
        </FormControl>
        <Button 
        w='200px'
        bg='blue'
        color='white'
        > 
            Submit 
        </Button>
    </Box>
    )
}
