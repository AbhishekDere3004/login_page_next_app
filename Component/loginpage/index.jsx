import React from 'react';
import styles from './styles.module.css';
import { IoMdClose, IoIosEye } from "react-icons/io";
import Link from 'next/link';




export default function Loginpage() {


  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <IoMdClose />
      </span>
      <h1 className={styles.title}> Login Page</h1>
      <div className={styles.inputs}>
        <input className={styles.username} type='text' placeholder='USERNAME' />
      </div>
      <div className={styles.inputs}>
        <input className={styles.password} type='password' placeholder='PASSWORD' />
      </div>
      <p className={styles.forgotPassword}>Forgot Password ?</p>
      <button className={styles.button}><h2>LOGIN</h2></button>
     
        <p className={styles.createAccount}><Link to="/">Don't Have An Account ?</Link></p>
     

    </div>
  );
}
