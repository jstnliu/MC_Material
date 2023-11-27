import { useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({ setUser }) {

const [showLoginForm, setShowLoginForm] = useState(true)

const toggleForm = () => {
  setShowLoginForm(prevShowLoginForm => !prevShowLoginForm) 
}

  return (
    <>
      <h1>AuthPage</h1>
      <button onClick={ toggleForm }>
        {showLoginForm ? 'Switch to Sign Up' : 'Switch to Log In'}
      </button>
      {showLoginForm ? (
        <LoginForm setUser={ setUser } />
      ) : (
        <SignUpForm setUser={ setUser } />
      )}
    </>
  )
}
