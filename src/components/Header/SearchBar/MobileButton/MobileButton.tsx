import React from 'react'
import styles from './MobileButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface Props {
  searchHandler: () => void
}

export default function MobileButton(props: Props) {
  return (
    <button className={styles.search} onClick={props.searchHandler}>
<FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search__icon']} />
    </button>
  )
}
