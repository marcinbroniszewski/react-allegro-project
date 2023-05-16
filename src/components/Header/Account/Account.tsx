import React from 'react'
import styles from './Account.module.scss'
import smartIcon from '../../img/smart-icon.svg'
import chevronDown from '../../img/chevron-down.svg'
import { useMediaQuery } from 'react-responsive'
import userIcon from './img/account-user.svg'
import Dropdown from './Dropdown/Dropdown'
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { AuthStateInterface } from '../../../store/auth-slice'


export default function Account() {
	const user = useSelector((state: {auth: AuthStateInterface}) => state.auth.user)
	const [isClicked, setIsClicked] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)


	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })

	const mobileTabletStructure = <img src={userIcon} alt='ikona użytkownika' />


const chevronClasses = !isClicked ? styles['acc__chevron'] : `${styles['acc__chevron']} ${styles['acc__chevron-clicked']}`
const smartClasses = !user ? styles['acc__smart-text'] : `${styles['acc__smart-text']} ${styles['acc__smart-user']}`
	const desktopStructure = (
		<div>
			<span className={smartClasses}>
				{user? 'jesteś' : 'bądź'} <img src={smartIcon} alt='smart icon' className={styles['acc__smart-icon']} />
			</span>
			<br />
			<span className={styles['acc__allegro-text']}>
				{user ? user.email : 'Moje allegro'} <img src={chevronDown} alt='ikona strzałki w dół' className={chevronClasses} />
			</span>
		</div>
	)

const toggleDropdown = () => { 
	setIsClicked(prevIsClicked => !prevIsClicked)
 }

 useEffect(() => {
	const handleClickOutside = (event: MouseEvent) => {
	  if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
		setIsClicked(false);
	  }
	};

	document.addEventListener("mousedown", handleClickOutside);

	return () => {
	  document.removeEventListener("mousedown", handleClickOutside);
	};
  }, [dropdownRef]);

  const handleDropdownClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

	return (
			<div className={styles.acc} onClick={toggleDropdown} ref={dropdownRef}>
				{isMobile && mobileTabletStructure}
				{isTablet && mobileTabletStructure}
				{isDesktop && desktopStructure}
			{isClicked && <Dropdown onClick={handleDropdownClick} closeDropdown={toggleDropdown} />}
			</div>
	)
}
