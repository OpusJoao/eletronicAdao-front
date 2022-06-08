import styles from '../styles/Separator.module.css'
export default function Separator({text}){
    return (
        <div className={styles.separator}>
            <div className={styles.separatorFirstLine}><hr/></div>
            <div className={styles.separatorText}>{text}</div>
            <div className={styles.separatorLastLine}><hr/></div>
        </div>
      )
}