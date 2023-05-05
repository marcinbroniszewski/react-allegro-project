import React from 'react'
import styles from './ProductLayout.module.scss'
import { useLoaderData } from 'react-router-dom'
import Button from '../UI/Button'

interface ProductContentData {
	[key: string]: any
}

export default function ProductLayout() {
	const data = useLoaderData() as ProductContentData

	return (
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
				<span className={styles['buy__price']}>{data.price.toString().replace('.', ',')}</span>
				<img
					src={
						'https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg'
					}
					alt='smart icon'
				/>
				<div className={styles['buy__btns-box']}>
                    <div className={styles['buy__counter-box']}>
                        <button className={styles['buy__decrement']} disabled>
                        <img src={'https://a.allegroimg.com/original/3405da/b79337fd41c7b3f700420f100508/action-common-minus-55598c726d.svg'} alt="ikona minusa" />
                        </button>
                        <input className={styles['buy__counter']} type="number" min='1' max='10' autoComplete='off'/>
                        <button className={styles['buy__increment']}>
                            <img src={'https://a.allegroimg.com/original/34978c/28ed3a9a43eba1fea7b003648fc0/action-common-plus-e8421c2b24.svg'} alt="ikona plusa" />
                        </button>
                    </div>
					<Button text='dodaj do koszyka' />
					<Button text='kup i zapłać' />
				</div>
			</section>
		</div>
	)
}
