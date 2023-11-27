import Image from 'next/image'
import styles from './page.module.css'
import Loginpage from '../../Component/loginpage'

export default function Home() {
  return (
    <main className={styles.main}>
     <Loginpage/>
    </main>
  )
}
