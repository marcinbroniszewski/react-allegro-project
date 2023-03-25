import React from 'react'
import styles from './Account.module.scss'
import smartIcon from '../../img/smart-icon.svg'
import chevronDown from '../../img/chevron-down.svg'
import { useMediaQuery } from 'react-responsive'
import userIcon from './img/account-user.svg'
import Dropdown from './Dropdown/Dropdown'
import { useState, useEffect, useRef } from 'react'




export default function Account() {
	const [isClicked, setIsClicked] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)


	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })

	const mobileTabletStructure = <img src={userIcon} alt='ikona użytkownika' />

	const desktopStructure = (
		<>
			<span className={styles['acc__smart-text']}>
				bądź <img src={smartIcon} alt='smart icon' className={styles['acc__smart-icon']} />
			</span>
			<br />
			<span className={styles['acc__allegro-text']}>
				Moje allegro <img src={chevronDown} alt='ikona strzałki w dół' className={styles['acc__chevron']} />
			</span>
		</>
	)

const toggleDropdown = () => { 
	setIsClicked(!isClicked)
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
			{isClicked && <Dropdown onClick={handleDropdownClick}/>}
			</div>
	)
}
