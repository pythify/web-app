import React from 'react';
import { RegisterForm } from '../components/organisms';
import { LogoTemplate } from '../templates';
import styles from '../scss/pages/RegisterPage.module.scss';
import banner from '../assets/images/BannerRegister.svg';

export function RegisterPage() {
  return (
    <LogoTemplate>
      <div className={styles.RegisterPage}>
        <figure className={styles.RegisterPage__banner}>
          <img src={banner} alt="Banner" />
        </figure>
        <RegisterForm />
      </div>
    </LogoTemplate>
  );
}
