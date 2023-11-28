import React from 'react'
import styles from './styles.module.css'
export default function Registrationpage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Registration page</h1>
      <div className={styles.inputs}>
        <input className={styles.username} type='text' placeholder='USERNAME' />
        <input className={styles.email} type='email' placeholder='EMAIL' />
        <input className={styles.password} type='password' placeholder='PASSWORD' />
        <input className={styles.password} type='password' placeholder='CONFIM PASSWORD' />
      </div>
      <button className={styles.button}><h2>LOGIN</h2></button>
      <p className={styles.createAccount}>Already Have An Account ?</p>
    </div>
  )
}
