import React from 'react'
import Card from '../../../UI/Card'
import smartIcon from '../../../img/smart-icon.svg'
import styles from '../card-sections-styles.module.scss'
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel'
import { useMediaQuery } from 'react-responsive'

const items = [
	{
		id: '1i',
		img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_28_5_852_03.jpg',
		price: '468,00',
		title: 'SAMSUNG XCOVER 4 G390F + ETUI + SZKŁO HARTOWANE',
	},
	{
		id: '2i',
		img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_28_5_852_03.jpg',
		price: '468,00',
		title: 'SAMSUNG XCOVER 4 G390F + ETUI + SZKŁO HARTOWANE',
	},
	{
		id: '3i',
		img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_28_5_852_03.jpg',
		price: '468,00',
		title: 'SAMSUNG XCOVER 4 G390F + ETUI + SZKŁO HARTOWANE',
	},
	{
		id: '4i',
		img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_28_5_852_03.jpg',
		price: '468,00',
		title: 'SAMSUNG XCOVER 4 G390F + ETUI + SZKŁO HARTOWANE',
	},
]

export default function Offers() {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })


	const mobileSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
	}

	const tabletSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
	}

	const desktopSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
	}

let settings = {}

if(isMobile) {
	settings = mobileSettings
} else if (isTablet) {
	settings = tabletSettings
} else if (isDesktop) {
	settings = desktopSettings
}

	return (
		<Card>
			<div>
				<h2>Oferty w supercenie</h2>
				<div className={styles.container}>			
					<ProductsCarousel settings={settings}>
							{items.map(item => {
								return (
									<div key={item.id} className={styles['container__product-box']}>
										<img src={item.img} alt='' className={styles['container__product-img']} />
										<p className={styles['container__product-price']}>{item.price} zł</p>
										<img src={smartIcon} alt='ikona smart allegro' />
										<p className='title'>Somat Gold Zestaw do Zmywareki 4 Elementy</p>
									</div>
								)
							})}
						</ProductsCarousel>
				</div>
			</div>
		</Card>
	)
}
