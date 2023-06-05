import React from 'react'
import styles from '../CategoriesSelect.module.scss'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  setSubcategory, setSubSubcategory, toggleSelectionTab, CategoryState } from '../../../store/category-slice'

export default function SubSubcategorySelect() {
	const data: any = useLoaderData()
	const selectedCategory = useSelector((state: {category: CategoryState}) => state.category.selectedCategory)
	const selectedSubcategory = useSelector((state: {category: CategoryState}) => state.category.selectedSubcategory)
	const dispatch = useDispatch()
	const categoryObject = data[selectedCategory][selectedSubcategory]

	const selectingSubSubcategoryHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setSubSubcategory(event.currentTarget.value))
		dispatch(toggleSelectionTab(false))
	}

	const goBackToSubcategoriesHandler = () => {
		dispatch(setSubcategory(''))
	}

const subcategoryNameFixed = selectedSubcategory.replaceAll('-', ' ')

	return (
		<div className={styles['sub-subcategory-select']}>
			<div className={styles.stepback}>
				<button className={styles['stepback__button']} onClick={goBackToSubcategoriesHandler}>
					cofnij do: {subcategoryNameFixed}
				</button>
			</div>
			<header className={styles.header}>
				<h2 className={styles['header__h2']}>{subcategoryNameFixed}</h2>
			</header>
			<ul className={styles.subcategories}>
				{Object.keys(categoryObject).map(subsubcategory => {
					return (
						<li key={subsubcategory} className={styles['categories__sub-subcategory']}>
							<button
								className={styles['categories__sub-subcategory-btn']}
								value={subsubcategory}
								onClick={selectingSubSubcategoryHandler}>
								{subsubcategory.replaceAll('-', ' ')}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
