import React from 'react'
import Menu from '../Menu'
import Searchbar from '../Searchbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <>
     <Menu/>
     <Searchbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default RootLayout