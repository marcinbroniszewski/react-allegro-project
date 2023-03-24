import React, {ReactNode} from 'react'
import styles from './ProductsCarousel.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function NextArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles['next-arrow']} onClick={onClick}>
			<FontAwesomeIcon icon={faChevronRight} className={styles['chevron-right']} />
		</div>
	)
}

function PrevArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles['prev-arrow']} onClick={onClick}>
			<FontAwesomeIcon icon={faChevronLeft} className={styles['chevron-left']} />
		</div>
	)
}

interface Props {
	settings: {
		[key: string]: number | boolean
	};
	children: ReactNode;
}


const ProductsCarousel = ({settings, children}: Props) => {
	
	const object = {
		...settings,
		nextArrow: <NextArrow />, prevArrow: <PrevArrow />
	}
	

  return (
    <div className={styles['products-carousel']}>
		<Slider {...object}>
				{children}
			</Slider>
	</div>
  )
}

export default ProductsCarousel