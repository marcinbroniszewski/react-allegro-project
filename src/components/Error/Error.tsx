import React from 'react'
import styles from './Error.module.scss'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='wrapper'>
        <div className={styles.error}>
            <div className={styles['error__img-box']}>
                <img src="https://a.allegroimg.com/original/12456e/448651804b238e55f6ab07d6a050" alt="bład 404" className={styles['error__img']}/>
            </div>
            <div className={styles['error__text-box']}>
                <h4 className={styles['error__header']}>Ups, nic tu nie ma</h4>
                <p className={styles['error__text']}>Ta strona nie istnieje. Mogliśmy ją usunąć lub przenieść. Jeśli chcesz poznać szczegóły, skorzystaj z pomocy.</p>
                <Link to='/'><Button text='wróć na stronę główną' /></Link>
            </div>
        </div>
    </div>
  )
}
