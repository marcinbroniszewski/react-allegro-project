import styles from './QuantityInput.module.scss'

interface Props {
	value: string
	min: string
	max: string
	setValue: any
}

export default function QuantityInput(props: Props) {
	const { value, min, max, setValue } = props
	let valueNumber = +value
	const maxNumber = +max
	const minNumber = +min 

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const inputValueNumber = +inputValue;
	  
		if (inputValue === '' || (inputValueNumber <= maxNumber && inputValueNumber >= minNumber)) {
		  setValue(inputValue);
		}
	  };
	const onIncrementHandler = () => {
		if (valueNumber < maxNumber) {
			valueNumber++
			const valueString = valueNumber.toString()
			setValue(valueString)
		}
	}

	const onDecrementHandler = () => {
		if (valueNumber > minNumber) {
			valueNumber--
			const valueString = valueNumber.toString()
			setValue(valueString)
		}
	}

	return (
		<div className={styles.input}>
			<button className={styles['input__decrement']} onClick={onDecrementHandler} disabled={valueNumber === 1}>
				<img
					src={
						'https://a.allegroimg.com/original/3405da/b79337fd41c7b3f700420f100508/action-common-minus-55598c726d.svg'
					}
					alt='ikona minusa'
				/>
			</button>
			<input
				className={styles['input__counter']}
				type='number'
				value={value}
				min={min}
				max={max}
				autoComplete='off'
				onChange={handleChange}
			/>
			<button className={styles['input__increment']} onClick={onIncrementHandler}>
				<img
					src={
						'https://a.allegroimg.com/original/34978c/28ed3a9a43eba1fea7b003648fc0/action-common-plus-e8421c2b24.svg'
					}
					alt='ikona plusa'
				/>
			</button>
		</div>
	)
}
