import QuantityInput from '../../UI/QuantityInput'
import { CartItemInterface } from '../../../store/cart-slice'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateItemQuantity, deleteFromCart } from '../../../store/cart-slice'
import styles from './CartItem.module.scss'
import smartIcon from '../../img/smart-icon.svg'

interface CartItemProps {
  item: CartItemInterface
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState<number>(item.quantity)
  
  useEffect(() => {
    dispatch(updateItemQuantity({
      id: item.id,
      quantity: quantity
    }))
  }, [quantity, dispatch, item.id])

  const deleteFromCartHandler = () => {
    dispatch(deleteFromCart(item))
  }

  return (
    <li className={styles.product}>
      <div className={styles['product__box']}>
        <div className={styles['product__img-box']}>
          <img src={item.img} alt={item.name} className={styles['product__img']} />
          <span className={styles['product__name']}>{item.name}</span>
        </div>
        <button className={styles['product__bin-btn']}><i className={styles['product__bin']} onClick={deleteFromCartHandler}></i></button>
      </div>
      <div className={styles['product__details']}>
        <div className={styles['product__quantity-box']}>
			<QuantityInput value={quantity.toString()} min='1' max={item.maxQuantity.toString()} setValue={setQuantity} />
					<span className={styles['product__max-quantity']}>z {item.maxQuantity} sztuk</span>
		</div>
        <span className={styles['product__price']}>{item.price.toFixed(2).toString().replace('.', ',')} zł</span>
      </div>
	  
      <div className={styles['product__hr']}></div>
      <p className={styles['product__smart-text']}><span className={styles['product__smart-text-span']}>darmowa dostawa</span> z pakietem <img className={styles['product__smart-icon']} src={smartIcon} alt="smart icon" /></p>
    </li>
  )
}