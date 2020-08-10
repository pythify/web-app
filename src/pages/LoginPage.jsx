import React from 'react';
import { LoginForm } from '../components/organisms';
import { LogoTemplate } from '../templates';
import styles from '../scss/pages/RegisterPage.module.scss';
import banner from '../assets/images/BannerLogin.svg';

export function LoginPage() {
  return (
    <LogoTemplate>
      <div className={styles.RegisterPage}>
        <figure className={styles.RegisterPage__banner}>
          <img src={banner} alt="Banner" />
        </figure>
        <LoginForm />
      </div>
    </LogoTemplate>
  );
}
