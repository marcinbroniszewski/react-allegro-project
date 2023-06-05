import React, { useState, useEffect, useRef } from 'react'
import styles from './SaleLayout.module.scss'
import CategorySelect from './CategorySelect/CategorySelect'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleSelectionTab,
	setCategory,
	setSubcategory,
	setSubSubcategory,
	CategoryState,
} from '../../store/category-slice'
import uuid from 'react-uuid'

export default function SaleLayout() {
	const dispatch = useDispatch()
	const categorySelectionTabRef = useRef<HTMLDivElement>(null)
	const [imgUrl, setImgUrl] = useState('')
	const [productName, setProductName] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productQuantity, setProductQuantity] = useState(1)
	const isCategorySelecting = useSelector((state: { category: CategoryState }) => state.category.categorySelectionTab)
	const selectedCategory = useSelector((state: { category: CategoryState }) => state.category.selectedCategory)
	const selectedSubcategory = useSelector((state: { category: CategoryState }) => state.category.selectedSubcategory)
	const selectedSubSubcategory = useSelector(
		(state: { category: CategoryState }) => state.category.selectedSubSubcategory
	)

	const addingImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setImgUrl(event.target.value)
	}

	const addingProductNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProductName(event.target.value)
	}

	const addingProductDescriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setProductDescription(event.target.value)
	}

	const openCategorySelectionTabHandler = () => {
		dispatch(setCategory(''))
		dispatch(setSubcategory(''))
		dispatch(setSubSubcategory(''))
		dispatch(toggleSelectionTab(true))
	}

	const onPriceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProductPrice(event.target.value)
	}

	const onQuantityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const valueToNumber = +event.target.value
		setProductQuantity(valueToNumber)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (categorySelectionTabRef.current && !categorySelectionTabRef.current.contains(event.target as Node)) {
				dispatch(toggleSelectionTab(false))
			}
		}
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [dispatch])

	const addProductOnSaleHandler = () => {
		fetch(
			`https://allegro-642ad-default-rtdb.europe-west1.firebasedatabase.app/categories/${selectedCategory}/${selectedSubcategory}/${selectedSubSubcategory}.json`,
			{
				method: 'POST',
				body: JSON.stringify({
					description: productDescription,
					id: uuid(),
					img: imgUrl,
					price: +productPrice,
					title: productName,
					quantity: productQuantity,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then(() => {
				setImgUrl('')
				setProductName('')
				setProductDescription('')
				dispatch(setCategory(''))
				dispatch(setSubcategory(''))
				dispatch(setSubSubcategory(''))
				dispatch(toggleSelectionTab(false))
				setProductPrice('')
				setProductQuantity(1)
				alert('Dodanie produktu na sprzedaż powiodło się!')
			})
			.catch(() => alert('Dodanie produktu na sprzedaż nie powiodło się.'))
	}

	let errorHintContent = ''

	if (+productPrice === 0) {
		errorHintContent = 'Minimalna cena to 1 zł'
	}

	if (selectedSubSubcategory === '') {
		errorHintContent = 'Wybierz kateogrię'
	}

	if (productName === '') {
		errorHintContent = 'Dodaj tytuł oferty'
	}

	if (imgUrl === '') {
		errorHintContent = 'Dodaj zdjęcie'
	}

	let submitDisabled = true

	if (errorHintContent === '' && productQuantity > 0) {
		submitDisabled = false
	}

	return (
		<div className={styles.sale}>
			<div className={styles['form-container']}>
				<div className={styles.form}>
					<h3 className={styles.h3}>Dodaj zdjęcie</h3>
					<div className={`${styles['form__drop-area']} ${styles.box}`}>
						{imgUrl && <img src={imgUrl} alt='zdjęcie produktu' className={styles['form__product-img']} />}
						<input
							type='text'
							placeholder='Podaj link do zdjęcia produktu'
							className={styles['form__form-control']}
							onChange={addingImageHandler}
							value={imgUrl}
						/>
					</div>
					<div className={`${styles['form__title']} ${styles.box}`}>
						<h3 className={styles.h3}>Nazwa</h3>
						<input
							type='text'
							id='offer-title'
							placeholder='Wpisz, co chcesz sprzedać'
							className={styles['form__form-control']}
							maxLength={50}
							onChange={addingProductNameHandler}
							value={productName}
						/>
						<div className={styles['form__title-length']}>{0 + productName.length} / 50</div>
					</div>
					<div className={`${styles['form__description']} ${styles.box}`}>
						<h3 className={styles.h3}>Opis</h3>
						<textarea
							name='description'
							id='description'
							cols={70}
							rows={5}
							placeholder='Powiedz kupującym coś więcej'
							className={styles['form__form-control']}
							onChange={addingProductDescriptionHandler}
							value={productDescription}></textarea>
					</div>
					<div className={`${styles['form__category']} ${styles.box}`}>
						<h3 className={styles.h3}>Kategoria</h3>
						{selectedSubSubcategory && (
							<div className={styles['form__selected-categories']}>
								<span className={styles['form__selected-category']}>{selectedCategory.replaceAll('-', ' ')}</span>
								<span className={styles['form__selected-subcategory']}>{selectedSubcategory.replaceAll('-', ' ')}</span>
								<span className={styles['form__selected-sub-subcategory']}>
									{selectedSubSubcategory.replaceAll('-', ' ')}
								</span>
							</div>
						)}
						{!isCategorySelecting && (
							<button className={styles['form__category-button']} onClick={openCategorySelectionTabHandler}>
								Przeglądaj wszystkie kategorie...
							</button>
						)}
						<div ref={categorySelectionTabRef}>{isCategorySelecting && <CategorySelect />}</div>
					</div>
					<div className={`${styles['form__price']} ${styles.box}`}>
						<h3 className={styles.h3}>Cena przedmiotu</h3>
						<div className={styles['form__price-input-box']}>
							<input
								type='number'
								placeholder='0,00'
								className={styles['form__form-control']}
								onChange={onPriceChangeHandler}
								value={productPrice}
							/>
							<span className={styles['form__currency']}>zł</span>
						</div>
					</div>
					<div className={`${styles['form__quantity']} ${styles.box}`}>
						<label className={styles['form__quantity-label']}>Liczba przedmiotów</label>
						<input
							type='number'
							className={`${styles['form__form-control']} ${styles['form__quantity-input']}`}
							onChange={onQuantityChangeHandler}
							value={productQuantity.toString()}
							inputMode="numeric"
						/>
						{productQuantity <= 0 && (
							<p className={styles['form__quantity-error']}>Minimalna liczba przedmiotów to 1.</p>
						)}
					</div>
				</div>
			</div>

			<div className={styles['summary-container']}>
				<div className={styles.summary}>
					<header className={styles['summary__header']}>
						<h4 className={styles['summary__title']}>Kup teraz</h4>
					</header>
					<ul className={styles['summary__benefits-list']}>
						<li className={styles['summary__benefit']}>Kupujący zapłacą szybko dzięki płatnościom online</li>
						<li className={styles['summary__benefit']}>
							Tania i wygodna dostawa z Allegro Paczkomaty InPost lub darmowa dostawa z Allegro Smart!
						</li>
						<li className={styles['summary__benefit']}>
							Ogłoszenie wyświetlimy na Lokalnie i Allegro bez limitu czasu
						</li>
					</ul>
					{errorHintContent && <p className={styles['summary__error-hint']}>{errorHintContent}</p>}
					<div className={styles['summary__offer-submit']}>
						<button
							className={styles['summary__submit-btn']}
							disabled={submitDisabled}
							onClick={addProductOnSaleHandler}>
							wystaw jako kup teraz
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
