import React, { useRef, useState } from 'react'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { apiClient } from '../../../shared/services/api-client'

const Login = () => {
    const [message, setMessage] = useState("")

    const emailRef=useRef();
    const passwordRef=useRef();
    const doLogin= async()=>{
        const userInfo={
            "email":emailRef.current.value,
            "password":passwordRef.current.value,
        }
        try{
        const response=await apiClient.post(process.env.REACT_APP_LOGIN_URL, userInfo)
        console.log("userinfo is",userInfo);
        setMessage(response.data.message);

        }
        catch(err){
            setMessage("Login failed");
            console.log("register error",err);
        }
    }

  return (
    <>
    <p>{message}</p>
    <Container>
        <TextField inputRef={emailRef} id="outlined-basic" label="email" variant="outlined" />
        <TextField inputRef={passwordRef} id="outlined-basic" type='password' label="password" variant="outlined" />
        <Button onClick={doLogin} variant='contained'>Login</Button>
    </Container>
    </>
  )
}

export default Login
