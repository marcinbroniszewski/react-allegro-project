import styles from './CartLayout.module.scss'
import CartItem from '../CartItem/CartItem'
import { CartItemInterface } from '../../../store/cart-slice'
import { useSelector } from 'react-redux'
import Button from '../../UI/Button'
import { AuthStateInterface } from '../../../store/auth-slice'
import { useNavigate } from 'react-router-dom'
import CartEmpty from '../CartEmpty/CartEmpty'

interface CartState {
	items: CartItemInterface[]
}
export default function CartLayout() {
	const user = useSelector((state: { auth: AuthStateInterface }) => state.auth.user)
	const cart = useSelector((state: { cart: CartState }) => state.cart.items)
	const arrayOfPrices = cart.map(item => item.quantity * item.price)
	const totalPrice = arrayOfPrices
		.reduce((a: number, b: number) => a + b, 0)
		.toFixed(2)
		.replace('.', ',')
	const navigate = useNavigate()

	const handlePaymentClick = () => {
		if (!user) {
			navigate('/logowanie')
		}
	}

	console.log(cart.length)

	return (
		<>
			{cart.length === 0 && <CartEmpty />}
			{cart.length > 0 && (
				<div className={styles.cart}>
					<ul className={styles['cart-items']}>
						{cart.map((item: CartItemInterface) => {
							return <CartItem item={item} key={item.id} />
						})}
					</ul>
					<div className={styles['cart-summary']}>
						<div className={styles['cart-summary__price']}>
							<span>Wartość produktów</span>
							<span>{totalPrice} zł</span>
						</div>
						<div className={styles['cart-summary__delivery']}>
							<span>Dostawa od</span>
							<span>0,00 zł</span>
						</div>
						<div className={styles['cart-summary__hr']}></div>
						<div className={styles['cart-summary__total']}>
							<span className={styles['cart-summary__total-text']}>Razem z dostawą</span>
							<span className={styles['cart-summary__total-price']}>{totalPrice} zł</span>
						</div>
						<Button text='dostawa i płatność' onClick={handlePaymentClick} />
					</div>
				</div>
			)}
		</>
	)
}
