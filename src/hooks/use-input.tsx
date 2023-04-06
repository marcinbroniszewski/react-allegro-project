import {useState} from 'react'

export default function useInput(validateValue: (value:string) => boolean) {

  const [enteredValue, setEnteredValue] = useState('')
const [inputIsTouched, setInputIsTouched] = useState(false)

const valueIsValid = validateValue(enteredValue)
const hasError = !valueIsValid && inputIsTouched

const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => { 
  setEnteredValue(e.target.value)
}

const inputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
setInputIsTouched(true)
}

const reset = () => { 
  setEnteredValue('')
  setInputIsTouched(false)
 }


 

  return {value: enteredValue, isValid: valueIsValid, hasError, valueChangeHandler, inputBlurHandler, reset, setInputIsTouched}
}
