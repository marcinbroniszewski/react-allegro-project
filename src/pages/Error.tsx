import React from 'react'
import Header from '../components/Header/Header'
import MainNavigation from '../components/MainNavigation/MainNavigation'
import Footer from '../components/Footer/Footer'
import Error from '../components/Error/Error'

export default function ErrorPage() {
	return (
		<>
			<Header />
			<MainNavigation />
			<Error />
			<Footer />
		</>
	)
}
