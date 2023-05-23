import React from 'react'
import cartIcon from '../img/cart.svg'
import styles from './CartIcon.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CartItemInterface } from '../../../store/cart-slice'

interface CartState {
	items: CartItemInterface[]
}

interface Props {
	onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
	onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
}

export default function CartIcon(props: Props) {
	const cart = useSelector((state: { cart: CartState }) => state.cart.items)
	const arrayOfQuantities = cart.map(item => item.quantity)
	const totalQuantity = arrayOfQuantities.reduce((a: number, b: number) => a + b, 0)

	return (
		<Link to='koszyk'>
			<div className={styles.cart} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
        <img src={cartIcon} alt='cart icon' className={styles['cart__icon']} />
        {totalQuantity > 0 && <div className={styles['cart__badge']}><span className={styles['cart__quantity']}>{totalQuantity}</span></div>}
      </div>
		</Link>
	)
}
