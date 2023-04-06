import React, { useState } from 'react';
import styles from './AuthForm.module.scss';
import Button from '../UI/Button';
import useInput from '../../hooks/use-input';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

interface Props {
  authFunction: (auth: any, email: string, password: string) => Promise<any>;
  text: string
  linkText: string
  link: string
  anchor: string
}

export default function AuthForm({ authFunction, text, linkText, link, anchor }: Props) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [showPassword, setShowPassword] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    setInputIsTouched: emailInputIsTouched,
  } = useInput((value: string) => {
    return emailRegex.test(value);
  });
  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passValueChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: passReset,
    setInputIsTouched: passInputIsTouched,
  } = useInput((value) => value.length >= 8);

  const formSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailIsValid && !passIsValid) {
      emailInputIsTouched(true);
      passInputIsTouched(true);
      return;
    }

    if (!emailIsValid) {
      emailInputIsTouched(true);
      return;
    }
    if (!passIsValid) {
      passInputIsTouched(true);
      return;
    }

    authFunction(auth, emailValue, passValue)

    passReset();
    emailReset();
  };

  const togglePasswordView = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const emailInputClasses = emailHasError ? `${styles['form__email-input']} ${styles.error}` :  `${styles['form__email-input']}`
  const passInputClasses = passHasError ? `${styles['form__pass-input']} ${styles.error}` :  `${styles['form__pass-input']}`
const showPassBtnClasses = passHasError ?`${styles['form__show-pass']} ${styles.error}` : `${styles['form__show-pass']}`


	return (
		<div className={styles.form}>
			<h1 className={styles['form__header']}>{text}</h1>
			<form action='' className={styles['form__container']} onSubmit={formSubmition}>
				<input
					type='email'
					autoComplete='e-mail'
					placeholder='e-mail'
					className={emailInputClasses}
					onChange={emailValueChangeHandler}
					onBlur={emailBlurHandler}
					value={emailValue}
				/>
				{emailHasError && <p className={styles['form__error-text']}>Wpisz prawidłowy adres e-mail</p>}
				<div className={styles['form__pass-box']}>
					<input
						type={!showPassword ? 'password' : 'text'}
						name='password'
						autoComplete='new-password'
						placeholder='hasło'
						className={passInputClasses}
						onChange={passValueChangeHandler}
						onBlur={passBlurHandler}
						value={passValue}
					/>
					<label htmlFor='password'>
						<button type='button' className={showPassBtnClasses} onClick={togglePasswordView}>
							pokaż
						</button>
					</label>
				</div>
				{passHasError && <p className={styles['form__error-text']}>Hasło powinno zawierać min. 8 znaków</p>}
				<div className={styles['form__btn-box']}>
					<Button text={text} />
				</div>
			</form>
      <section className={styles['switch-section']}>
        <p><strong>{linkText}</strong><Link to={link}>{anchor}</Link></p>
      </section>
		</div>
	)
  }