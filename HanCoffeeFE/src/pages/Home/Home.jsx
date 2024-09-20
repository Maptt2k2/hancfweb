import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Product from '../../components/Product/Product'
import Download from '../../components/Download/Download'
const Home = () => {
  return (
    <div className='content'>
      <Header />
      <Menu />
      <Product />
      <Download />
    </div>
  )
}

export default Home
