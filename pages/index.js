import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rishav</title>
      </Head>
      <div className={styles.about_me}>
        <div className={styles.text}>
        <p><span>Hello,</span> Myself Rishav</p>
        <p>I am a Learner, I Studies and try different things, Subjects and Domains</p>
        <p>You Can find about me more in ABOUT Section and things i do in EXPLORE section</p>
        <p>No Buddy is Hiring me because i dont have experience in web deveplment. I dont have any experience because Nobody is Hiring me</p>
        </div>
      <Image src="/profile.jpeg" width="100" height="100"></Image>
      </div>
    </div>
  )
}
