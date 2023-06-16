import React from 'react'
import AuthForm from '../AuthForm'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/auth-slice'
import { useNavigate } from 'react-router-dom'

const SignUp: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (auth: any, email: string, password: string) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			const { user } = userCredential

			dispatch(
				setUser({
					uid: user.uid,
					email: user.email,
				})
			)
			navigate(-1)
		} catch (error) {
			alert('Rejestracja nie powiodła się')
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
