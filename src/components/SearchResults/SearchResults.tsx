import React from 'react'
import styles from '../Category/CategoryContent.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function SearchResults() {
	const params = useParams()
	const matchingProducts = useSelector((state: RootState) => state.search.matchingObjects)

	return (
		<div className={styles.results}>
			<section className={styles['results__header']}>
				<h1 className={styles['results__h1']}>szukasz: „{params.searchValue}"</h1>
			</section>
			{matchingProducts.length === 0 && (
				<section className={styles['results__not-found']}>
					<h3 className={styles['results__not-found-h3']}>Przykro nam, nie znaleźliśmy ofert dla „{params.searchValue}"</h3>
					<p className={styles['results__not-found-text-bold']}>Spróbuj jeszcze raz:</p>
					<ul className={styles['results__not-found-ul']}>
						<li className={styles['results__not-found-li']}>inaczej wpisać nazwę</li>
						<li className={styles['results__not-found-li']}>sprawdzić czy nie ma błędu</li>
						<li className={styles['results__not-found-li']}>poszukać czegoś podobnego</li>
					</ul>
				</section>
			)}
			{matchingProducts.length > 0 && (
				<section className={styles['results__products']}>
					<ul>
						{matchingProducts.map(product => {
							return (
								<li key={product.id} className={styles['results__li']}>
									<Link to={product.link}>
										<div className={styles['results__product']}>
											<div className={styles['results__product-img']}>
												<img src={product.img} alt={product.title} />
											</div>
											<div className={styles['results__product-data']}>
												<p className={styles['results__product-title']}>{product.title}</p>
												<p className={styles['results__product-price']}>
													{product.price.toFixed(2).toString().replace('.', ',')} <span>zł</span>
												</p>
												<img
													src={
														'https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg'
													}
													alt='smart icon'
												/>
											</div>
										</div>
									</Link>
								</li>
							)
						})}
					</ul>
				</section>
			)}
		</div>
	)
}
