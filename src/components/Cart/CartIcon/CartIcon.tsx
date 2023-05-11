import React from 'react'
import cart from '../img/cart.svg'
import styles from './CartIcon.module.scss'
import { Link } from 'react-router-dom'

export default function Cart() {


  return (
    <Link to='koszyk'><img src={cart} alt="cart icon" className={styles.cart} /></Link>
  )
}
