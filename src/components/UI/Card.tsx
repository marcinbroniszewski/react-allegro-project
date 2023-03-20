import React from 'react'
import styles from './Card.module.scss'

type Props = {
    children: React.ReactNode
}

export default function Card(props: Props) {
  return (
    <div className={styles.card}>{props.children}</div>
  )
}
