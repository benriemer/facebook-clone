import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import {auth, provider} from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../Reducer'

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    }).catch((err) => alert(err.message))
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook Logo"
        >
        </img>
        <img
          src="https://logosmarken.com/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt="Facebook Slogan"
        >
        </img>
      </div>
      <Button type="submit" onClick={signIn} >
        Sign-In
      </Button>
    </div>
  )
}

export default Login
