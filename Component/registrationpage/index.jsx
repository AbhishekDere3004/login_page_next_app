// components/RegistrationPage.js
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
export default function RegistrationPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Registration page</h1>
      <div className={styles.inputs}>
        <input className={styles.username} type='text' placeholder='USERNAME' />
        <input className={styles.email} type='email' placeholder='EMAIL' />
        <input className={styles.password} type='password' placeholder='PASSWORD' />
        <input className={styles.password} type='password' placeholder='CONFIRM PASSWORD' />
      </div>
      <button className={styles.button}><h2>Sign In</h2></button>
      <Link href="/Loginpage">
        <p className={styles.createAccount}>Already Have An Account?</p>
      </Link>
    </div>
  );
}
