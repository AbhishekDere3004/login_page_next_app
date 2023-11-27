import React from 'react';
import styles from './styles.module.css';



export default function Loginpage() {


  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Login page</h1>
      <div className={styles.inputs}>
        <input className={styles.username} type='text' placeholder='USERNAME' />
        <input className={styles.password} type='password' placeholder='PASSWORD' />
      </div>
      <p className={styles.forgotPassword}>Forgot Password ?</p>
      <button className={styles.button}><h2>LOGIN</h2></button>
      <p className={styles.createAccount}>Don't Have An Account ?</p>
    </div>
  );
}
