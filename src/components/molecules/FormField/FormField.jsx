import React from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../../atoms';
import styles from './FormField.module.scss';

export function FormField({ id, label, input, register, error }) {
  return (
    <div className={styles.FormField}>
      <label htmlFor={id}>{label}</label>
      <FormInput name={id} register={register} {...input} />
      {error && <p className={styles.FormField__error}>{error.message}</p>}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object
};

FormField.defaultProps = {
  error: {}
};
