import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/organisms';
import { LogoTemplate } from '../templates';
import styles from '../scss/pages/RegisterPage.module.scss';
import banner from '../assets/images/BannerLogin.svg';

export function LoginPage() {
  return (
    <LogoTemplate>
      <div className={styles.RegisterPage}>
        <Link to="/register" className={styles.RegisterPage__banner}>
          <h2>Registrate Aquí</h2>
          <img src={banner} alt="Banner" />
        </Link>
        <LoginForm />
      </div>
    </LogoTemplate>
  );
}
