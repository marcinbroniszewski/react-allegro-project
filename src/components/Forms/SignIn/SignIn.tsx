import React from 'react'
import AuthForm from '../AuthForm'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn: React.FC = () => {
	const handleSubmit = async (auth: any, emailValue: string, passValue: string) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, emailValue, passValue)
			console.log(userCredential)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<AuthForm
			authFunction={handleSubmit}
			text='Zaloguj się'
			linkText='Nie masz jeszcze konta?'
			link='/rejestracja'
			anchor='zarejestruj się'
		/>
	)
}

export default SignIn
