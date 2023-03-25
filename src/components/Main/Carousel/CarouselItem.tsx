import React from 'react'
import Button from '../../UI/Button'
import styles from './CarouselItem.module.scss'
import { useMediaQuery } from 'react-responsive'

interface CarouselItemProps {
	item: Record<string, string>
}

const CarouselItem = (props: CarouselItemProps) => {

	const isMobile = useMediaQuery({ maxWidth: 767 })
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
	const isDesktop = useMediaQuery({ minWidth: 992 })

const mobileStructure = (
	
	<div className={styles['carousel-item__mobile']}>
		<div className={styles['carousel-item__box']}>
			<h3 className={styles['carousel-item__header']}>{props.item.title}</h3>
			<p className={styles['carousel-item__text']}>{props.item.description}</p>
			<Button text='zobacz więcej'/>
		</div>
	</div>

)

const tabletDesktopStructure = (<>
	<div className={styles['carousel-item__left']}>
			<div className={styles['carousel-item__box']}>
				<h3 className={styles['carousel-item__header']}>{props.item.title}</h3>
				<p className={styles['carousel-item__text']}>{props.item.description}</p>
				<Button text='zobacz więcej'/>
			</div>
		</div>
		<div className={styles['carousel-item__right']}>
			<img src={props.item.src} alt={props.item.alt} />
		</div>
	</>)

	return (
		<div className={styles['carousel-item']}>
{isMobile && mobileStructure}
{isTablet && tabletDesktopStructure

}
{isDesktop && tabletDesktopStructure
	}
</div>
	)
}
export default CarouselItem
