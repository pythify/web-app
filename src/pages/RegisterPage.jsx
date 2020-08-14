import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/organisms';
import { LogoTemplate } from '../templates';
import styles from '../scss/pages/RegisterPage.module.scss';
import banner from '../assets/images/BannerRegister.svg';

export function RegisterPage() {
  return (
    <LogoTemplate>
      <div className={styles.RegisterPage}>
        <Link to="/login" className={styles.RegisterPage__banner}>
          <img src={banner} alt="Banner" />
        </Link>
        <RegisterForm />
      </div>
    </LogoTemplate>
  );
}
