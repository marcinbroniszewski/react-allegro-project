import React from 'react'
import styles from './CategoryContent.module.scss'
import { useParams, useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface CategoryContentData {
	[key: string]: any
}

export default function CategoryContent() {
	const data = useLoaderData() as CategoryContentData
	const params = useParams()
	const id = params.subcategoryId2
	const title = id ? id.replace(/-/g, ' ') : ''



	return (
		<div className={styles.category}>
			<section className={styles['category__header']}>
				<h1 className={styles['category__h1']}>{title}</h1>
			</section>
			<section className={styles['category__products']}>
				<ul>
					{Object.keys(data).map(product => (
						<li key={data[product].id}>
							<Link to={product}>
                <div className={styles['category__product']}>
                  <div className={styles['category__product-img']}>
                    <img src={data[product].img} alt={data[product].title} />
                  </div>
                  <div className={styles['category__product-data']}>
                    <p className={styles['category__product-title']}>{data[product].title}</p>
                    <p className={styles['category__product-price']}>{data[product].price.toFixed(2).toString().replace('.', ',')} <span>zł</span></p>
                                  <img src={'https://a.allegroimg.com/original/343b4d/ed3f5c04412ab7bd70dd0a34f0cd/brand-subbrand-smart-d8bfa93f10.svg'} alt="smart icon" />
                  </div>
                </div>
              </Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}
