import React from 'react'
import styles from './MainNavigation.module.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default function MainNavigation() {

    
	return (
		<div className={styles.nav}>
			<div className='wrapper'>
				<div className={styles['nav__container']}>
					<button className={styles['nav__btn']}>
						Kategorie <FontAwesomeIcon icon={faChevronDown} size='lg' />
					</button>
					<div className={styles['nav__links-box']}>
						<NavLink to={'/'}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>
							Okazje
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}
