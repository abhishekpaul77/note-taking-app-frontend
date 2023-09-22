import React, { useRef, useState } from 'react'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { apiClient } from '../../../shared/services/api-client'

const Register = () => {
    const [message, setMessage] = useState("")

    const emailRef=useRef();
    const passwordRef=useRef();
    const nameRef=useRef();
    const phoneRef=useRef();
    const doRegister= async()=>{
        const userInfo={
            "email":emailRef.current.value,
            "password":passwordRef.current.value,
            "name":nameRef.current.value,
            "phone":phoneRef.current.value
        }
        try{
        const response=await apiClient.get(process.env.REACT_APP_REGISTER_URL, userInfo)
        console.log("userinfo is",userInfo);
        const msg=response.data.message;
        setMessage(msg);

        }
        catch(err){
            console.log("register error",err);
        }
    }

  return (
    <>
    <p>{message}</p>
    <Container>
        <TextField inputRef={emailRef} id="outlined-basic" label="email" variant="outlined" />
        <TextField inputRef={passwordRef} id="outlined-basic" type='password' label="password" variant="outlined" />
        <TextField inputRef={nameRef} id="outlined-basic" label="name" variant="outlined" />
        <TextField inputRef={phoneRef} id="outlined-basic" label="phone" variant="outlined" />
        <Button onClick={doRegister} variant='contained'>Register</Button>
    </Container>
    </>
  )
}

export default Register
