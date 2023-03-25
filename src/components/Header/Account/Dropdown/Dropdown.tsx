import React from 'react'
import styles from './Dropdown.module.scss'
import loginImg from './img/login-img.webp'
import Button from '../../../UI/Button'
import { Link } from 'react-router-dom'

interface DropdownProps {
    onClick: React.MouseEventHandler<HTMLDivElement>;
  }
  
  const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <div className={styles.dropdown} onClick={props.onClick}>
        <img src={loginImg} alt="" className={styles['dropdown__img']}/>
        <h3 className={styles['dropdown__header']}>Witaj w Allegro</h3>
        <p className={styles['dropdown__small-text']}>Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</p>
        <Button text='zaloguj się'/>
        <p className={styles['dropdown__reg-text']}>Nie masz konta? <Link to={''} className={styles['dropdown__reg-link']}>Zarejestruj się</Link></p>
    </div>
  )
}

export default Dropdown