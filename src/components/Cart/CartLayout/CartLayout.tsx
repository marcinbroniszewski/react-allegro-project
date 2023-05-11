import CartItem from '../CartItem/CartItem'
import { CartItemInterface } from '../../../store/cart-slice'
import { useSelector } from 'react-redux'

interface CartState {
	items: CartItemInterface[]
}
export default function CartLayout() {
	const cart = useSelector((state: {cart: CartState}) => state.cart.items)
	const arrayOfPrices = cart.map(item => item.quantity * item.price)
	const totalPrice = arrayOfPrices.reduce((a: number, b: number) => a + b, 0).toFixed(2)

	return (
	<>
		<ul>
			{cart.map((item: CartItemInterface) => {
				return <CartItem item={item} key={item.id} />
			})}
		</ul>
		<div>
			<p>Wartość produktów <span>{totalPrice}</span></p>
		</div>
		</>
	)
}
