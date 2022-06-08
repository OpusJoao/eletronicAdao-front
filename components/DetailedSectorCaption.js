import styles from '../styles/DetailedSectorCaption.module.css'

export default function DetailedSectorCaption({captions}){
    return (
        <div className={styles.detailedSectorCaption}>
          {captions.map((value)=>{
            return (
              <div className={styles.captionGroup}>
              <div className={styles.captionColor}></div>
              <div className={styles.captionText}>{value.text}</div>
            </div>
            )
          })}
        </div>
    )
}