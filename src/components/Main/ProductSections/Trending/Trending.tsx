import React from 'react'
import Card from '../../../UI/Card'
import smartIcon from '../../../img/smart-icon.svg'
import styles from '../card-sections-styles.module.scss'
import ProductsCarousel, {findCategory} from '../ProductsCarousel/ProductsCarousel'
import { useMediaQuery } from 'react-responsive'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Trending() {
const data: any = useLoaderData()

	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })


	const mensShoesCategory = findCategory(data, 'buty-męskie')
	const womensShoesCategory = findCategory(data, 'buty-damskie')
	const concatCategoriesArray = mensShoesCategory.concat(womensShoesCategory)

	const mobileSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
	}

	const tabletSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
	}

	const desktopSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
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
				<h2>Na czasie</h2>
				<div className={styles.container}>			
					<ProductsCarousel settings={settings}>
							{concatCategoriesArray.map(item => {
								return (
									<Link to={item.link} key={item.id}>
									<div className={styles['container__product-box']}>
										<img src={item.img} alt='' className={styles['container__product-img']} />
										<p className={styles['container__product-price']}>{item.price.toFixed(2).replace('.', ',')} zł</p>
										<img src={smartIcon} alt='ikona smart allegro' />
										<p className={styles['container__product-title']}>{item.title}</p>
									</div>
									</Link>
								)
							})}
						</ProductsCarousel>
				</div>
			</div>
		</Card>
	)
}
