import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Cabecalho from '../components/Cabecalho'
import Menu from '../components/Menu'
import Post from '../components/Post'

export default function Home() {
  return (
    <div>
      <Head>
        <title>City Ground Brasil - Home</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link><link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"></link>
        
      </Head>

      <main>
        <Cabecalho />
        <Menu />

        <div className={styles.main}>
          <div className="container">

            <div className="col-4">
              <Post />
            </div>

          </div>
        </div>
       
      </main>  
    </div>
  )
}
