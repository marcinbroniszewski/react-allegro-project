import React from 'react'
import AuthForm from '../AuthForm'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/auth-slice'
import { useNavigate } from 'react-router-dom'

const SignIn: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (auth: any, emailValue: string, passValue: string) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, emailValue, passValue)
			const { user } = userCredential

			dispatch(
				setUser({
					uid: user.uid,
					email: user.email,
				})
			)
			navigate(-1)
		} catch (error) {
			alert('Logowanie nie powiodło się')
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
