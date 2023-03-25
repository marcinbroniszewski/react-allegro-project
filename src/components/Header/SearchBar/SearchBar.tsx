import React from 'react'
import Button from '../../UI/Button'
import styles from './SearchBar.module.scss'
import { useMediaQuery } from 'react-responsive'
import MobileButton from './MobileButton/MobileButton'

export default function SearchBar() {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })


	
	const mobileStructure = <MobileButton />

	const tabletDesktopStructure = (
		<>
			<select name='categories' defaultValue={'categories'} className={styles['search__select']}>
				<option value='categories'>Wszystkie kategorie</option>
				<option value='home-and-garden'>Dom i ogród</option>
			</select>
			<Button text='szukaj'/>
		</>
	)

	return (
		<div className={styles.search}>
			<input type='text' placeholder='czego szukasz?' className={styles['search__input']} />
			{isMobile && mobileStructure}
			{isTablet && tabletDesktopStructure}
			{isDesktop && tabletDesktopStructure}
		</div>
	)
}
