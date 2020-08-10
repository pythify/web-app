import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './RegisterForm.module.scss';
import registerFormElements from './registerForm.json';
import { FormField } from '../../molecules';
import { Button } from '../../atoms';
import { parseSignupData, sendSignupInfo } from './helpers';

export function RegisterForm() {
  const { handleSubmit, register, errors } = useForm();

  async function onSubmit(data) {
    const parsedData = parseSignupData(data);
    await sendSignupInfo(parsedData);
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
  );
}
