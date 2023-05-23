import React from 'react'
import styles from './ProductModal.module.scss'
import ReactDOM from 'react-dom'
import Button from './Button'
import { Link } from 'react-router-dom'

interface Props {
	name: string
	price: string
	quantity: number
	totalPrice: number
	img: string
    closeModal: React.MouseEventHandler<HTMLButtonElement | HTMLImageElement | HTMLDivElement>
}

export default function ProductModal(props: Props) {
	const quntityString = props.quantity.toString()
	const totalString = props.totalPrice.toFixed(2).toString().replace('.', ',')
	const priceString = props.price.toString().replace('.', ',')

	return ReactDOM.createPortal(
		<div className={styles.modal} onClick={props.closeModal}>
			<div className={styles['modal__content']}>
				<img
					src='https://a.allegroimg.com/original/34f3f5/bf439aab49d0a78bcd7501d51697/action-common-x-6c70096572.svg'
					alt='exit icon'
					className={styles['modal__cross-icon']}
                    onClick={props.closeModal}
				/>
				<h3 className={styles['modal__h3']}>Dodałeś przedmiot do koszyka</h3>
				<div className={styles['modal__item-box']}>
					<div className={styles['modal__img-box']}>
						<img src={props.img} alt={props.name} className={styles['modal__item-img']} />
					</div>
					<div className={styles['modal__item-details']}>
						<p className={styles['modal__item-title']}>
							{quntityString}x {props.name}
						</p>
						<div className={styles['modal__price-box']}>
							<p className={styles['modal__item-total']}>{totalString} zł</p>
							<p className={styles['modal__item-price']}>za sztukę {priceString} zł</p>
						</div>
					</div>
				</div>
				<div className={styles['modal__btns']}>
					<button className={styles['modal__continue-btn']} onClick={props.closeModal}>kupuj dalej</button>
					<Link to='/koszyk'>
						<Button text='idź do koszyka' />
					</Link>
				</div>
			</div>
		</div>,

		document.getElementById('modal-root')!
	)
}
