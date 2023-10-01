import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import LeftSideBar from './ui/LeftSideBar'

export default function Layout() {
  return (
    <>
      <div className="page-container">
        <LeftSideBar />
        <Header />
        <main className='container'>
          <Outlet />
        </main>
        <footer>Footer</footer>

      </div>
    </>
  )
}
