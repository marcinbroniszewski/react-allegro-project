import React from 'react'
import styles from './Button.module.scss'

interface Props {
  text: string
}

export default function Button(props: Props) {
  return (
    <button className={styles.btn}>{props.text}</button>
  )
}
