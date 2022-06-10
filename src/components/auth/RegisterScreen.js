import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startRegister } from '../../actions/auth'
import { setError } from '../../actions/ui'

import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui)


const [formValues, handleInputChange, reset] = useForm(
  {
    userName: '',
    email: '',
    password: '',
    password2: '',
  }
)
const {userName, email, password, password2} = formValues

const handleSubmit = (e) => {
  e.preventDefault();

  if ( isFormValid() ) {
    dispatch( startRegister( email, password, userName) )
  }
  reset()
}

const isFormValid = () => {
  if ( userName.trim().length === 0 ) {
    dispatch( setError('Name is required') )
    return false
  } else if ( !validator.isEmail ( email ) ) {
    dispatch( setError('Email no valid') )
    return false
  } else if (password !== password2 || password.length < 5 ) {
    dispatch( setError('Password should be alt least 6 characters and match password') )
    return false
  }
 return true
}

  return (
    <div>
        <h3 className='auth__title'>Register</h3>
        <form onSubmit={ handleSubmit }>
          {
            msgError && 
            <div className='auth__alert-error'>
              {msgError}
            </div>
          }
          <input
            value={ userName }
            onChange={ handleInputChange }
            className='auth__input'
            type='text'
            placeholder='Name'
            name='userName'
            autoComplete='off'
          />

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
          />
          
          <input
            value={ password2 }
            onChange={ handleInputChange }
            className='auth__input'
            type='password'
            placeholder='Confirm Password'
            name='password2'
          />
          <button
            className='btn btn-primary btn-block mb-5'
            type='submit'
          >
              Register
          </button>

            <Link 
              to='/auth/login'
              className='link'
            >
              Already registered?
            </Link>
       </form>
    </div>
  )
}
