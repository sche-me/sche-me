import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout
