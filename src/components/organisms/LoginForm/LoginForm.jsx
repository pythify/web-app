import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginAsyncUser } from '../../../data/slices/user'

import registerFormElements from './loginForm.json'
import { FormField } from '../../molecules'
import { Button } from '../../atoms'
import { parseSignupData } from './helpers'
import styles from './LoginForm.module.scss'

export function LoginForm() {
  const { handleSubmit, register, errors } = useForm()
  const dispatch = useDispatch()

  async function onSubmit(data) {
    const parsedData = parseSignupData(data)
    await dispatch(loginAsyncUser(parsedData))
  }

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit(onSubmit)}>
      <h1>{registerFormElements.title}</h1>
      <div className={styles['LoginForm__form-container']}>
        {registerFormElements.fields.map((field) => (
          <FormField
            key={field.id}
            id={field.id}
            label={field.label}
            input={field.input}
            register={register(field.registerProps)}
            error={errors[field.id]}
          />
        ))}
        <Button>Sign Up</Button>
      </div>
    </form>
  )
}
