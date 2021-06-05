import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grids from './_grids'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
  
     
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"> Products</h1>
        <br />
        <p className="mx-auto text-base  leading-relaxed text-gray-700 ">  Send <a className="text-blue-700" href="https://twitter.com/mudrankgupta"> Mudrank a nessage</a> to remind Arav to make him finish this or get help</p>

        <br />

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.producthunt.com/makers-festival/green-earth"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <span className={styles.logo}>
     A Product for Product Hunt Maker Festival 2021
          </span>
        </a>
      </footer>
    </div>
  )
}