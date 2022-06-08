import {useEffect, useState } from 'react'
import DetailedSectorCaption from '../components/DetailedSectorCaption'
import PreviewSector from '../components/PreviewSector'
import Sectors from '../components/Sectors'
import Separator from '../components/Separator'
import styles from '../styles/Home.module.css'
const mockSectors = [
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
  {
    number: 1,
    color: 'red'
  },
]
const mockCaptions = [ {text: 'OK', color: 'red'}, {text: 'OK', color: 'red'} ]
export default function Home() {
  const [sectors,setSectors] = useState([])
  useEffect(()=>setSectors(mockSectors), [])
  return (
    <div className={styles.container}>
      <Sectors sectors={sectors}></Sectors>
      <div className={styles.detailedSector}>
        <PreviewSector number={1} status={'status'}/>
        <Separator text="Caption/Legendas" />
        <DetailedSectorCaption captions={mockCaptions}/>
      </div>
    </div>
  )
}
