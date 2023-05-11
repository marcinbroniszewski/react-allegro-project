import React from 'react'
import styles from './Button.module.scss'

interface Props {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: Props) {
  return (
    <button className={styles.btn} onClick={props.onClick || (() => {})}>{props.text}</button>
  )
}

