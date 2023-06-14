import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'

export default function SearchResults() {
	const matchingProducts = useSelector((state: RootState) => state.search.matchingObjects)

	return (
		<div>
			{matchingProducts && matchingProducts.length > 0 ? (
				matchingProducts.map(product => (
					<Link to={product.link} key={product.id}>
						{' '}
						<div>
							{product.title}
							<img src={product.img} alt={product.title} />
						</div>
					</Link>
				))
			) : (
				<p>Brak pasujących produktów.</p>
			)}
		</div>
	)
}
