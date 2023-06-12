import styles from './NavDropdown.module.scss'
import { useLoaderData, Link } from 'react-router-dom'
import { useState } from 'react'

interface Props {
	closeDropdown: React.MouseEventHandler<HTMLAnchorElement>
}

export default function NavDropdown(props: Props) {
	const [selectedCategory, setSelectedCategory] = useState('moda')

	const data: any = useLoaderData()

	const handleSelectedCategory = (category: any) => {
		setSelectedCategory(category)
	}

	return (
		<div className={styles.dropdown}>
			<div className={styles['dropdown__categories']}>
				<ul>
					{Object.keys(data).map(category => {
						return (
							<li key={category} onMouseEnter={() => handleSelectedCategory(category)}>
								{category}
							</li>
						)
					})}
				</ul>
			</div>
			<div className={styles['dropdown__subcategories']}>
				{Object.keys(data[selectedCategory]).map(subcategory => {
					return (
						<div key={subcategory}>
							<h3>{subcategory.replace(/-/g, ' ')}</h3>
							<ul>
								{Object.keys(data[selectedCategory][subcategory]).map(subcategory2 => {

									return (
										<li key={subcategory2}>
											<Link
												to={`${selectedCategory}/${subcategory}/${subcategory2}`}
												onClick={props.closeDropdown}>
												{subcategory2.replace(/-/g, ' ')}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
				<ul></ul>
			</div>
		</div>
	)
}
