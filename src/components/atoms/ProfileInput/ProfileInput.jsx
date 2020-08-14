import React from 'react';
import styles from './ProfileInput.module.scss';

export function ProfileInput({ props }) {
  return (
    <div className={styles.ProfileInput}>
      <h2>{props.label}</h2>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}
