import {useEffect, useState } from 'react'
import DetailedSectorCaption from '../components/DetailedSectorCaption'
import PreviewSector from '../components/PreviewSector'
import Sectors from '../components/Sectors'
import Separator from '../components/Separator'
import styles from '../styles/Home.module.css'
const mockSectors = [
  {
    number: 1,
    color: 'silver'
  },
  {
    number: 2,
    color: 'limegreen'
  },
  {
    number: 3,
    color: 'limegreen'
  },
  {
    number: 4,
    color: 'limegreen'
  },
  {
    number: 5,
    color: 'silver'
  },
  {
    number: 6,
    color: 'silver'
  },
  {
    number: 7,
    color: 'silver'
  },
  {
    number: 8,
    color: 'silver'
  },
  {
    number: 9,
    color: 'deepskyblue'
  },
  {
    number: 10,
    color: 'limegreen'
  },
  {
    number: 11,
    color: 'silver'
  },
  {
    number: 12,
    color: 'red'
  },
  {
    number: 13,
    color: 'silver'
  },
  {
    number: 14,
    color: 'silver'
  },
  {
    number: 15,
    color: 'limegreen'
  },
  {
    number: 16,
    color: 'red'
  },
  {
    number: 17,
    color: 'silver'
  },
  {
    number: 18,
    color: 'deepskyblue'
  },
  {
    number: 19,
    color: 'limegreen'
  },
  {
    number: 20,
    color: 'limegreen'
  },
  {
    number: 21,
    color: 'yellow'
  },
  {
    number: 22,
    color: 'silver'
  },
  {
    number: 23,
    color: 'silver'
  },
  {
    number: 24,
    color: 'deepskyblue'
  },
  {
    number: 25,
    color: 'limegreen'
  },
  {
    number: 26,
    color: 'silver'
  },
  {
    number: 27,
    color: 'limegreen'
  },
  {
    number: 28,
    color: 'limegreen'
  },
  {
    number: 29,
    color: 'silver'
  },
  {
    number: 30,
    color: 'limegreen'
  },
  {
    number: 31,
    color: 'limegreen'
  },
  {
    number: 32,
    color: 'silver'
  },
  {
    number: 33,
    color: 'silver'
  },
  {
    number: 34,
    color: 'limegreen'
  },
  {
    number: 35,
    color: 'silver'
  },
]
const mockCaptions = [ {text: 'OK', color: 'limegreen'}, {text: 'Sem trabalho', color: 'silver'}, {text: 'Engenharia', color: 'deepskyblue'}, {text: 'Material', color: 'yellow'},{text: 'Manutenção', color: 'red'} ]
export default function Home() {
  const [sectors,setSectors] = useState([])
  useEffect(()=>setSectors(mockSectors), [])
  return (
    <div className={styles.container}>
      <Sectors sectors={sectors}></Sectors>
      <div className={styles.detailedSector}>
        <PreviewSector number={1} status={'Sem trabalho'}/>
        <Separator text="Caption/Legendas" />
        <DetailedSectorCaption captions={mockCaptions}/>
      </div>
    </div>
  )
}
