import { useState, useRef, useEffect } from 'react'
import styles from './MainNavigation.module.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import NavDropdown from './NavDropdown/NavDropdown'

export default function MainNavigation() {
	const [isActive, setIsActive] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const dropdownHandler = () => {
		setIsActive(prevState => !prevState)
	}

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsActive(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [dropdownRef])

	const chevronClass = isActive ? styles.active : ''

	return (
		<>
			<div className={styles.nav} ref={dropdownRef}>
				<div className='wrapper'>
					<div className={styles['nav__container']}>
						<button className={styles['nav__btn']} onClick={dropdownHandler}>
							Kategorie{' '}
							<span className={chevronClass}>
								<FontAwesomeIcon icon={faChevronDown} size='lg' className={chevronClass} />
							</span>
						</button>
						<div className={styles['nav__links-box']}>
							<NavLink
								to={'/'}
								className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
								Okazje
							</NavLink>
						</div>
					</div>
				{isActive && <NavDropdown closeDropdown={dropdownHandler} />}
				</div>
			</div>
		</>
	)
}
