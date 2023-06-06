import React, {useState} from 'react'
import styles from './Dropdown.module.scss'
import loginImg from './img/login-img.webp'
import Button from '../../../UI/Button'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AuthStateInterface, logout } from '../../../../store/auth-slice'

interface DropdownProps {
	onClick: React.MouseEventHandler<HTMLDivElement>
	closeDropdown: () => void
}

const Dropdown: React.FC<DropdownProps> = props => {
	const [isActive, setIsActive] = useState('shopping')
	const user = useSelector((state: { auth: AuthStateInterface }) => state.auth.user)
	const dispatch = useDispatch()

	const switchTabHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
setIsActive(event.currentTarget.value)
	}

const logoutHandler = () => {
dispatch(logout(null))
props.closeDropdown()
}

	return (
		<div className={styles.dropdown} onClick={props.onClick}>
			{!user && (
				<div className={styles['dropdown__container']}>
					<img src={loginImg} alt='' className={styles['dropdown__img']} />
					<h3 className={styles['dropdown__header']}>Witaj w Allegro</h3>
					<p className={styles['dropdown__small-text']}>
						Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!
					</p>
					<Link to={'logowanie'} onClick={props.closeDropdown} className={styles['dropdown__login-link']}>
						<Button text='zaloguj się' />
					</Link>
					<p className={styles['dropdown__reg-text']}>
						Nie masz konta?{' '}
						<Link to={'rejestracja'} onClick={props.closeDropdown} className={styles['dropdown__reg-link']}>
							Zarejestruj się
						</Link>
					</p>
				</div>
			)}
			{user && (
				<div className={styles['user-menu']}>
					<div className={styles['user-menu__btns-panel']}>
						<button className={`${styles['user-menu__btn']} ${isActive === 'shopping' ? styles.active : ''}`} value={'shopping'} onClick={switchTabHandler}><span>zakupy</span></button>
						<button className={`${styles['user-menu__btn']} ${isActive === 'sale' ? styles.active : ''}`} value={'sale'} onClick={switchTabHandler}><span>sprzedaż</span></button>
						<button className={`${styles['user-menu__btn']} ${isActive === 'account' ? styles.active : ''}`} value={'account'} onClick={switchTabHandler}><span>konto</span></button>
					</div>

				{isActive === 'shopping' &&	<div className={styles['user-menu__content']}>
						<h6 className={styles['user-menu__h6']}>Zakupy na Allegro</h6>
					</div>}
				{isActive === 'sale' &&	<div className={styles['user-menu__content']}>
						<h6 className={styles['user-menu__h6']}>Sprzedaż na Allegro</h6>
						<Link to={'/wystaw'} className={styles['user-menu__link']} onClick={props.closeDropdown}><p className={styles['user-menu__link-text']} >Wystaw przedmiot</p></Link>
					</div>}
				{isActive === 'account' &&	<div className={styles['user-menu__content']}>
						<div className={styles['user-menu__account-container']}>
							<div className={styles['user-menu__account-text-box']}>
								<h5 className={styles['user-menu__h5']}>Cześć!</h5>
								<p className={styles['user-menu__account-details']}>{user.email}</p>
							</div>
							<div className={styles['user-menu__account-icon-box']}><img src="https://a.allegroimg.com/original/1d9e29/f9e3678f49d28176dda9392edd30" alt="użytkownik" /></div>
						</div>
						<button onClick={logoutHandler} className={styles['user-menu__account-logout-btn']}>wyloguj się</button>
					</div>}
				</div>
			)}
		</div>
	)
}

export default Dropdown
