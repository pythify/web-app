import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';

export function FormInput({ name, register, ...input }) {
  return (
    <input
      ref={register}
      className={styles.FormInput}
      id={name}
      name={name}
      {...input}
    />
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
};
