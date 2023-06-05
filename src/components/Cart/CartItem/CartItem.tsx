import QuantityInput from '../../UI/QuantityInput'
import { CartItemInterface } from '../../../store/cart-slice'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateItemQuantity, deleteFromCart } from '../../../store/cart-slice'
import styles from './CartItem.module.scss'

interface CartItemProps {
	item: CartItemInterface
}

export default function CartItem({ item }: CartItemProps) {
	const dispatch = useDispatch()
	const [quantity, setQuantity] = useState(item.quantity.toString())
	
useEffect(() => {
dispatch(updateItemQuantity({
	id: item.id,
	quantity: +quantity}))	
}, [quantity, dispatch, item.id])


const deleteFromCartHandler = () => { 
	dispatch(deleteFromCart(item))
 }
	return (
		<li className={styles.product}>
			<img src={item.img} alt={item.name} className={styles['product__img']} />
			<span>{item.name}</span>
			<span>{item.price.toFixed(2).toString().replace('.', ',')}</span>
			<button className={styles['product__bin-btn']}><i className={styles['product__bin']} onClick={deleteFromCartHandler}></i></button>
			<QuantityInput value={quantity} min='1' max='10' setValue={setQuantity}/>
		</li>
	)
}
