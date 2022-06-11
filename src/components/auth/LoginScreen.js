import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
  
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const [ formValues, handleInputChange, reset ] = useForm({
    email: '',
    password: ''

  })
  const {email, password} = formValues


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password))

    reset()
  }
  

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() )
  }

  return (
    <div>
       <h3 className='auth__title'>Login</h3>
       <form onSubmit={ handleSubmit }>
         <input
            value={ email }
            onChange={ handleInputChange }
            className='auth__input'
            type='text'
            placeholder='Email'
            name='email'
            autoComplete='off'
          />
           <input
            value={ password }
            onChange={ handleInputChange }
            className='auth__input'
            type='password'
            placeholder='Password'
            name='password'
            autoComplete='off'
          />
          <button
            className='btn btn-primary btn-block'
            type='submit'
            disabled={ loading }
            >
              Login
            </button>

            <div className='auth__social-networks'>
              <p>Login with social network</p>
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p 
                  className="btn-text"
                  onClick={ handleGoogleLogin }
                >
                   <b>Sign in with google</b>
                </p>
              </div>
            </div>
            <Link 
              to='/auth/register'
              className='link'
            >
              Create new account
            </Link>
       </form>

    </div>
  )
}
