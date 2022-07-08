import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/appSlicer'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid
            }))
        })
        .catch((error) => alert(error.message))
    }

  return (
    <div className='login'>
        <div className="login-container">
            <img src="https://www.freeiconspng.com/thumbs/snapchat-logo/get-snapchat-logo-png-pictures-6.png"  alt=""/>
            <Button variant='outlined' onClick={signIn}>
                Sign In
            </Button>
        </div>
    </div>
  )
}

export default Login