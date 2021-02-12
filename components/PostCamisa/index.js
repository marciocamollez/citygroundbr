import styles from './index.module.css'
import Link from 'next/link'

function PostCamisa(){
    return(
        <div>
            <div className={styles.grid}>
                <img src="https://citygroundbr.files.wordpress.com/2020/11/capa.jpg" class="img-fluid" />

                <div className={styles.boxTexto}>
                    <h2>Teste de texto da categoria camisa</h2>
                </div>
            </div>
        </div>
    )
}

export default PostCamisa;