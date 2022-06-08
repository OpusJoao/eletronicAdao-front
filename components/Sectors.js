import styles from '../styles/Sectors.module.css'

/* TODO: cores estão hardcodadas no css, deixar dinamico a partir de um atributo do sector */
export default function Sectors({sectors}){
    return(
        <div className={styles.sectors}>
        {sectors.map(value => {
          return (
          <div className={styles.sector}>
            <h1>{value.number}</h1>
          </div>
          )
        })}
      </div>
    )
}