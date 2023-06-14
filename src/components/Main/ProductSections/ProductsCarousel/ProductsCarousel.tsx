import React, { ReactNode } from 'react'
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
	}
	children: ReactNode
}

const ProductsCarousel = ({ settings, children }: Props) => {
	const object = {
		...settings,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	}

	return (
		<div className={styles['products-carousel']}>
			<Slider {...object}>{children}</Slider>
		</div>
	)
}

export default ProductsCarousel

interface Category {
	id: string
	title: string
	price: number
	quantity: number
	img: string
	link: string
}

export const findCategory = (data: any, category: string) => {
    const matchingCategory: Category[] = [];

    const searchCategoryInData = (data: any, categoryPath: string[] = []) => {
        if (typeof data === 'object' && data !== null) {
            for (const key in data) {
                if (data.hasOwnProperty(category)) {
                    const categoryObjects: Category[] = Object.values(data[category]);
                    const linkSuffixes: string[] = Object.keys(data[category]);

                    for (let i = 0; i < categoryObjects.length; i++) {
                        const obj: Category = categoryObjects[i];
                        const linkSuffix: string = linkSuffixes[i];
                        const link: string = `/${categoryPath.join('/')}/${category}/${linkSuffix}`;

                        const categoryItem: Category = {
                            id: obj.id,
                            title: obj.title,
                            price: obj.price,
                            quantity: obj.quantity,
                            img: obj.img,
                            link: link,
                        };

                        matchingCategory.push(categoryItem);
                    }
                } else {
                    searchCategoryInData(data[key], [...categoryPath, key]);
                }
            }
        }
    };

    searchCategoryInData(data);
    return matchingCategory;
};