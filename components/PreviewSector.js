import styles from '../styles/PreviewSector.module.css'
import stylesGlobal from '../styles/Common.module.css'

export default function PreviewSector({number,status}){
    return(
        <div className={styles.previewSector}>
          <div className={styles.previewSectorNumber}>
            <h1>{number}</h1>
          </div>
          <div className={styles.previewSectorStatus}>
            <span className={stylesGlobal.badge}>{status}</span>
          </div>
        </div>
    )
}