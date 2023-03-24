import React from 'react'
import Carousel from './Carousel/Carousel'
import Trending from './ProductSections/Trending/Trending'
import Offers from './ProductSections/Offers/Offers'

export default function Main() {
	return (
		<main>
			<Carousel />
			<Trending />
			<Offers />
		</main>
	)
}
