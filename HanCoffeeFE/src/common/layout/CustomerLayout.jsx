import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCustomer from '../../components/Navbar/customer/NavbarCustomer'
import Footer from '../../components/Footer/Footer'
import StoreContextProvider from '../../context/StoreContext'

const CustomerLayout = () => {
  return (
    <div className='app'>
      <StoreContextProvider>
        <NavbarCustomer />
        <Outlet />
        <Footer />
      </StoreContextProvider>
    </div>
  )
}

export default CustomerLayout
