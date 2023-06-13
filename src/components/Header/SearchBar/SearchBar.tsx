import React, { useRef } from 'react'
import Button from '../../UI/Button'
import styles from './SearchBar.module.scss'
import { useMediaQuery } from 'react-responsive'
import MobileButton from './MobileButton/MobileButton'
import { useLoaderData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMatchingObjects } from '../../../store/search-slice'
import { createMatchingObjects } from '../../../store/search-slice'

export default function SearchBar() {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })

	const data: any = useLoaderData()
	const searchRef = useRef<HTMLInputElement>(null)
	const selectRef = useRef<HTMLSelectElement | null>(null);
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const mobileStructure = <MobileButton />

	const searchClickHandler = () => {
		if (searchRef.current?.value && selectRef.current?.value) {
			navigate(`/wyszukaj/${searchRef.current.value}`)

			const matchingObjects = createMatchingObjects(data, searchRef.current.value, selectRef.current.value)
			dispatch(setMatchingObjects(matchingObjects))
		}
	}

	const tabletDesktopStructure = (
		<>
			<select name='categories' className={styles['search__select']} ref={selectRef}>
				<option className={styles['search__option']} value='all-categories'>
					Wszystkie kategorie
				</option>
				<optgroup label='Kategorie' className={styles['search__option']}>
					{Object.keys(data).map(category => {
						return (
							<option key={category} className={styles['search__option']} value={category}>
								{category}
							</option>
						)
					})}
				</optgroup>
			</select>
			<Button text='szukaj' onClick={searchClickHandler} />
		</>
	)

	return (
		<div className={styles.search}>
			<input type='text' placeholder='czego szukasz?' className={styles['search__input']} ref={searchRef} />
			{isMobile && mobileStructure}
			{isTablet && tabletDesktopStructure}
			{isDesktop && tabletDesktopStructure}
		</div>
	)
}




