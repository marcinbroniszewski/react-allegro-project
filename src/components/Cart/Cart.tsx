import React from 'react'
import cart from './img/cart.svg'
import styles from './Cart.module.scss'

export default function Cart() {
  return (
    <img src={cart} alt="cart icon" className={styles.cart} />
  )
}
