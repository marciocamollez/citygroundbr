import styles from './index.module.css'
import Link from 'next/link'

function Menu() {
    return (
        <div>
            <div className={styles.menubar}>
                <div className="container">

                    <ul className={styles.menu}>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/camisas"><a>Camisas</a></Link></li>
                        <li><Link href="/titulos"><a>Títulos</a></Link></li>
                        <li><Link href="/especial"><a>Especial</a></Link></li>
                        <li><Link href="/curiosidades"><a>Curiosidades</a></Link></li>
                        <li><Link href="/lendas"><a>Lendas</a></Link></li>
                        <li><Link href="/clough"><a>Clough</a></Link></li>
                        <li><Link href="/fotos"><a>Fotos</a></Link></li>
                        <li><Link href="/estadio"><a>Estádio</a></Link></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Menu;