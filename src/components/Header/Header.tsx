import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './Header.module.scss'
import logo from './img/logo-allegro.svg'
import SearchBar from './SearchBar/SearchBar'
import Cart from '../Cart/Cart'
import Account from './Account/Account'

export default function Header() {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })

	const mobileTabletStructure = (
		<>
			<div className={styles['header__mobile-container']}>
				<img src={logo} alt='logo allegro' className={styles['header__logo']} />
				<div className={styles['header__icons']}>
					<Cart />
					<Account />
				</div>
			</div>
			<SearchBar />
		</>
	)

	const desktopStructure = (
		<div className={styles['header__desktop-container']}>
			<img src={logo} alt='logo allegro' className={styles['header__logo']} />
			<SearchBar />
			<div className={styles['header__icons-box']}>
				<Cart />
				<Account />
			</div>
		</div>
	)

	return (
		<header className={styles.header}>
			<div className='wrapper'>
				{isMobile && mobileTabletStructure}
				{isTablet && mobileTabletStructure}
				{isDesktop && desktopStructure}
			</div>
		</header>
	)
}
