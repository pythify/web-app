import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerAsyncUser } from '../../../data/slices/user'

import registerFormElements from './registerForm.json'
import { FormField } from '../../molecules'
import { Button } from '../../atoms'
import { parseSignupData } from './helpers'

import styles from './RegisterForm.module.scss'

export function RegisterForm() {
  const { handleSubmit, register, errors } = useForm()
  const dispatch = useDispatch()

  async function onSubmit(data) {
    const parsedData = parseSignupData(data)
    dispatch(registerAsyncUser(parsedData))
  }
  return (
    <form className={styles.RegisterForm} onSubmit={handleSubmit(onSubmit)}>
      <h1>{registerFormElements.title}</h1>
      <div className={styles['RegisterForm__form-container']}>
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
