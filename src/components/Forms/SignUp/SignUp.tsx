import React from 'react'
import AuthForm from '../AuthForm'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp: React.FC = () => {
	const handleSubmit = async (auth: any, email: string, password: string) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			console.log(userCredential)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<AuthForm
			authFunction={handleSubmit}
			text='Zarejestruj się'
			linkText='Posiadasz już konto?'
			link='/logowanie'
			anchor='zaloguj się'
		/>
	)
}

export default SignUp
