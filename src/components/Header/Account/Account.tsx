import React from 'react'
import styles from './Account.module.scss'
import smartIcon from '../../img/smart-icon.svg'
import chevronDown from '../../img/chevron-down.svg'
import { useMediaQuery } from 'react-responsive'
import userIcon from './img/account-user.svg'

export default function Account() {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })

	const mobileTabletStructure = <img src={userIcon} alt='ikona użytkownika' />

	const desktopStructure = (
		<div className={styles.acc}>
			<span className={styles['acc__smart-text']}>
				bądź <img src={smartIcon} alt='smart icon' className={styles['acc__smart-icon']} />
			</span>
			<br />
			<span className={styles['acc__allegro-text']}>
				Moje allegro <img src={chevronDown} alt='ikona strzałki w dół' className={styles['acc__chevron']} />
			</span>
		</div>
	)

	return (
		<>
			{isMobile && mobileTabletStructure}
			{isTablet && mobileTabletStructure}
			{isDesktop && desktopStructure}
		</>
	)
}
