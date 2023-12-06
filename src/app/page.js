import Image from 'next/image'
import styles from './page.module.css'
import Loginpage from '../../Component/loginpage'
import RegistrationPage from '../../Component/registrationpage'

export default function Home() {
  return (
    <main className={styles.main}>
     <RegistrationPage/>
    
    </main>
  )
}
