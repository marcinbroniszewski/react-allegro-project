import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/Header/Header'

export default function RootLayout() {
  return (
    <>
    <MainNavigation />
    <Outlet />
    </>
  )
}
