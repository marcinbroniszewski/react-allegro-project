import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import MainNavigation from '../components/MainNavigation/MainNavigation'
import Footer from '../components/Footer/Footer'



export default function RootLayout() {
  return (
    <>
    <Header />
    <MainNavigation />
    <Outlet />
    <Footer />
    </>
  )
}
