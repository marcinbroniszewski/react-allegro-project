import React from 'react'
import styles from '../CategoriesSelect.module.scss'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSubcategory, CategoryState } from '../../../store/category-slice'
import SubSubcategorySelect from '../SubSubcategorySelect/SubSubcategorySelect'

export default function SubcategorySelect() {
	const data: any = useLoaderData()
	const selectedCategory = useSelector((state: {category: CategoryState}) => state.category.selectedCategory)
	const selectedSubcategory = useSelector((state: {category: CategoryState}) => state.category.selectedSubcategory)
	const dispatch = useDispatch()
	const categoryObject = data[selectedCategory]

	const selectingSubcategoryHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setSubcategory(event.currentTarget.value))
	}

	const goBackToCategoriesHandler = () => {
		dispatch(setCategory(''))
	}

	return (
	<>
		{selectedCategory !== '' && selectedSubcategory === '' ?
		<div className={styles['subcategory-select']}>
			<div className={styles.stepback}>
				<button className={styles['stepback__button']} onClick={goBackToCategoriesHandler}>
					cofnij do: wszystkie kategorie
				</button>
			</div>
			<header className={styles.header}>
				<h2 className={styles['header__h2']}>{selectedCategory}</h2>
			</header>
			<ul className={styles.subcategories}>
				{Object.keys(categoryObject).map(subcategory => {
					return (
						<li key={subcategory} className={styles['categories__subcategory']}>
							<button
								className={styles['categories__subcategory-btn']}
								value={subcategory}
								onClick={selectingSubcategoryHandler}>
								{subcategory.replaceAll('-', ' ')}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
		: <SubSubcategorySelect />
	}
	</>
	)
}
