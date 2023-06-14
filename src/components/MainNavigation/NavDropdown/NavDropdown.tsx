import styles from './NavDropdown.module.scss'
import { useLoaderData, Link } from 'react-router-dom'
import { useState } from 'react'

interface Props {
	closeDropdown: React.MouseEventHandler<HTMLAnchorElement>
}

export default function NavDropdown(props: Props) {
	const data: any = useLoaderData()
	const [selectedCategory, setSelectedCategory] = useState(Object.keys(data)[0])

	const handleSelectedCategory = (category: any) => {
		setSelectedCategory(category)
	}

	const categoryClasses = (category: string) => {
		const baseCategory = styles['dropdown__category']
		const selectedCategoryClass = `${styles['dropdown__category']} ${styles['dropdown__selected-category']}`

		if (selectedCategory === category) {
			return selectedCategoryClass
		} else {
			return baseCategory
		}
	}

	return (
		<div className={styles.dropdown}>
			<ul className={styles['dropdown__categories']}>
				{Object.keys(data).map(category => {
					return (
						<li
							className={categoryClasses(category)}
							key={category}
							onMouseEnter={() => handleSelectedCategory(category)}
							value={category}>
							{category}
						</li>
					)
				})}
			</ul>
			<div className={styles['dropdown__subcategories']}>
				{Object.keys(data[selectedCategory]).map(subcategory => {
					return (
						<div key={subcategory}>
							<h3 className={styles['dropdown__subcategory']}>{subcategory.replace(/-/g, ' ')}</h3>
							<ul>
								{Object.keys(data[selectedCategory][subcategory]).map(subcategory2 => {
									return (
										<li key={subcategory2} className={styles['dropdown__subsubcategory']}>
											<Link to={`${selectedCategory}/${subcategory}/${subcategory2}`} onClick={props.closeDropdown}>
												{subcategory2.replace(/-/g, ' ')}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}
