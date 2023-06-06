import React from 'react'
import styles from './CartDropdown.module.scss'
import { useSelector } from 'react-redux'
import { CartState } from '../../../store/cart-slice'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button'


interface Props {
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
}

export default function CartDropdown(props: Props) {
	const totalPrice = useSelector((state: { cart: CartState }) => state.cart.totalPrice)
	const cartItems = useSelector((state: { cart: CartState }) => state.cart.items)

	return (
		<div className={styles.dropdown} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
			<div className={styles.header}>
				<h4 className={styles['header__h4']}>Twój koszyk</h4>
				<div className={styles['header__value-box']}>
					<span className={styles['header__value-text']}>wartość koszyka</span>
					<span className={styles['header__value']}>{totalPrice.toFixed(2)} zł</span>
				</div>
			</div>
			<div className={styles.main}>
				{totalPrice === 0 && (
					<div className={styles['main__content-box']}>
						<h4 className={styles['main__h4']}>Twój koszyk jest pusty</h4>
						<p className={styles['main__p']}>Dodaj do koszyka przedmioty i kup je szybko i wygodnie</p>
						<p className={styles['main__p']}>
							Przez koszyk możesz kupić za jednym razem do 50 przedmiotów od różnych sprzedawców.
						</p>
					</div>
				)}
				{totalPrice > 0 && (
					<>
						<ul className={styles['main__list-items']}>
							{cartItems.map(item => 
{
							const totalPrice = item.quantity * item.price
								return <li key={item.id} className={styles['main__item-container']}>
									<img src={item.img} alt={item.name} className={styles['main__item-img']} />
									<span className={styles['main__item-name']}>
										{item.quantity} x {item.name}
									</span>
									<div className={styles['main__price-box']}>
										<span className={styles['main__item-total']}>{totalPrice.toFixed(2).toString().replace('.', ',')} zł</span>
										<span className={styles['main__item-price']}>za sztukę {item.price.toFixed(2).toString().replace('.', ',')}</span>
									</div>
								</li>}
							)}
						</ul>
					</>
				)}
			</div>
			{totalPrice && (
				<div className={styles['btn-box']}>
                    <Link to='koszyk' className={styles['cart-link']}>pokaż koszyk</Link>
					<Link to='koszyk'><Button text='do kasy' /></Link>
				</div>
			)}
		</div>
	)
}
