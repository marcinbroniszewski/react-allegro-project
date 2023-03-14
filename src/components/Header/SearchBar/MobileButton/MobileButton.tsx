import React from 'react'
import styles from './MobileButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function MobileButton() {
  return (
    <button className={styles.search}>
<FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search__icon']} />
    </button>
  )
}
