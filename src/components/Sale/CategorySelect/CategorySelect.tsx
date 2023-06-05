import React from 'react'
import styles from '../CategoriesSelect.module.scss'
import { useLoaderData } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SubcategorySelect from '../SubcategorySelect/SubcategorySelect'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSelectionTab, setCategory, CategoryState } from '../../../store/category-slice'

export default function CategorySelect() {
	const data: any = useLoaderData()
	const selectedCategory = useSelector((state: {category: CategoryState}) => state.category.selectedCategory)
	const dispatch = useDispatch()

	const selectCategoryHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setCategory(event.currentTarget.value))
	}

	const closeCategorySelectionTabHandler = () => {
		dispatch(toggleSelectionTab(false))
	}



	return (
		<>
			{selectedCategory === '' ? (
				<div className={styles['category-select']}>
					<header className={styles.header}>
						<h2 className={styles['header__h2']}>Przeglądaj Kategorie</h2>
						<button className={styles['header__prev-btn']} onClick={closeCategorySelectionTabHandler}>
							<FontAwesomeIcon icon={faArrowLeft} size='xl' className={styles['header__arrow']} />
						</button>
					</header>
					<ul className={styles.categories}>
						{Object.keys(data).map(category => {
							return (
								<li key={category} className={styles['categories__category']}>
									<button
										className={styles['categories__category-btn']}
										onClick={selectCategoryHandler}
										value={category}>
										{category.replaceAll('-', ' ')}
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			) : (
				<SubcategorySelect />
			)}
		</>
	)
}
