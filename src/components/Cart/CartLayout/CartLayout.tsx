import CartItem from '../CartItem/CartItem'
import { CartItemInterface } from '../../../store/cart-slice'
import { useSelector } from 'react-redux'
import Button from '../../UI/Button'
import { AuthStateInterface } from '../../../store/auth-slice'
import { useNavigate } from 'react-router-dom'

interface CartState {
	items: CartItemInterface[]
}
export default function CartLayout() {
	const cart = useSelector((state: {cart: CartState}) => state.cart.items)
	const user = useSelector((state: {auth: AuthStateInterface}) => state.auth.user)
	const arrayOfPrices = cart.map(item => item.quantity * item.price)
	const totalPrice = arrayOfPrices.reduce((a: number, b: number) => a + b, 0).toFixed(2)
	const navigate = useNavigate()


	const handlePaymentClick = () => { 
		if (!user) {
navigate('/logowanie')
		}
	 }

	return (
	<>
		<ul>
			{cart.map((item: CartItemInterface) => {
				return <CartItem item={item} key={item.id} />
			})}
		</ul>
		<div>
			<p>Wartość produktów <span>{totalPrice}</span></p>
			<Button text='dostawa i płatność' onClick={handlePaymentClick}/>
		</div>
		</>
	)
}
