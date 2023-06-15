import React from 'react'
import styles from './CartEmpty.module.scss'

export default function CartEmpty() {
	return (
		<div className={styles.emptycart}>
			<div className={styles['emptycart__text-box']}>
				<h1 className={styles['emptycart__h1']}>Twój koszyk jest pusty</h1>
				<p className={styles['emptycart__text']}>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</p>
				<p className={styles['emptycart__text']}>Przez koszyk możesz kupić za jednym razem do 50 przedmiotów od różnych sprzedawców.</p>
			</div>
			<div className={styles['emptycart__img-box']}>
                <img className={styles['emptycart__img']} src={'https://a.allegroimg.com/original/128979/cffc85574887bd8fa916acaabaf8'} alt="obrazek chłopca z mieczem" />
            </div>
		</div>
	)
}
