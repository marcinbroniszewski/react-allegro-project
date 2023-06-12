import styles from './ProductLayout.module.scss';
import { useLoaderData } from 'react-router-dom';
import Button from '../UI/Button';
import QuantityInput from '../UI/QuantityInput';
import { useState} from 'react';
import { addToCart } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';
import ProductModal from '../UI/ProductModal';

interface ProductContentData {
  [key: string]: any;
}

export default function ProductLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const data = useLoaderData() as ProductContentData;
const [quantity, setQuantity] = useState('1')
const dispatch = useDispatch()

const onAddToCartHandler = () => { 
dispatch(addToCart({
  id: data.id,
  name: data.title,
  price: +data.price,
  quantity: +quantity,
totalPrice: +data.price * +quantity,
  img: data.img
}))
setIsModalOpen(true)
 }

 const closeModalHandler = () => {  
  setIsModalOpen(false)
 }

  return (
    <>
  {isModalOpen && <ProductModal name={data.title} price={data.price} quantity={+quantity} totalPrice={+data.price * +quantity} img={data.img} closeModal={closeModalHandler} />}
    <div className={styles.product}>
      <section className={styles['product__header']}>
        <h1 className={styles['product__h1']}>{data.title}</h1>
        <img src={data.img} alt={data.title} className={styles['product__img']} />
      </section>
      <section className={styles['product__description']}>
        <p className={styles['product__text']}>Opis</p>
        <h2 className={styles['product__h2']}>{data.title}</h2>
        <p className={styles['product__description-text']}>{data.description}</p>
      </section>
      <section className={styles.buy}>
        <h2 className={styles['buy__h2']}>{data.title}</h2>
        <span className={styles['buy__price']}>{data.price.toFixed(2).toString().replace('.', ',')}</span>
        <img
          src={
            'https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg'
          }
          alt='smart icon'
        />
        <div className={styles['buy__btns-box']}>
          <QuantityInput value={quantity} min='1' max={data.quantity} setValue={setQuantity} />
          <div className={styles['buy__counter-box']}></div>
          <Button text='dodaj do koszyka' onClick={onAddToCartHandler} />
          <Button text='kup i zapłać' />
        </div>
      </section>
    </div>
    </>
  );
}