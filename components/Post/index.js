import styles from './index.module.css'
import Link from 'next/link'

function Post(){
    return(
        <div>
            <div className={styles.grid}>
                <img src="https://citygroundbr.files.wordpress.com/2021/02/wycombe_a_3-min.jpg?w=600" class="img-fluid" />

                <div className={styles.boxTexto}>
                    <h2>Teste de texto de notícia</h2>
                </div>
            </div>
        </div>
    )
}

export default Post;