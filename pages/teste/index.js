import Head from 'next/head'
import Link from 'next/link'


function HomePage() {
    return (
        <div>
            <div className="container">Welcome to Next.js!</div>
            <Link href="/"><a>Voltar para Home</a></Link>
        </div>

    )
}
  
export default HomePage