import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './RegisterForm.module.scss'
import registerFormElements from './registerForm.json'
import { FormField } from '../../molecules'
import { Button } from '../../atoms'

export function RegisterForm() {
  const { handleSubmit, register } = useForm()

  function onSubmit(data) {
    console.log(data)
  }
  return (
    <form className={styles.RegisterForm} onSubmit={handleSubmit(onSubmit)}>
      <h1>{registerFormElements.title}</h1>
      <div className={styles['RegisterForm__form-container']}>
        {registerFormElements.fields.map((field) => (
          <FormField key={field.id} register={register} {...field} />
        ))}
        <Button>Sign Up</Button>
      </div>
    </form>
  )
}
