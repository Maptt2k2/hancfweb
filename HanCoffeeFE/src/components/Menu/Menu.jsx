import React, { useContext, useState } from 'react'
import './Menu.scss'
import { StoreContext } from '../../context/StoreContext'
const Menu = () => {

  const url = "http://localhost:8888"
  const { category_list } = useContext(StoreContext)
  const [category, setCategory] = useState("All")

  return (
    <div className='menu' id='menu'>
      <h1 className='menu__heading'>explore our categorys</h1>
      <p className='menu__desc'>
        Embark on a journey through our curated selection of charming cafés. Each spot offers a unique ambiance and exquisite coffee blends. It's more than a cup of coffee; it's a space for connection, creativity, and cherished moments.
      </p>
      <div className="menu__list">
        {category_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.name ? 'All' : item.name)} key={index} className="menu__list-item">
              <img src={url + "/images/" + item.image} alt="Menu image" className="menu__list-item-img" />
              <h3 className={category === item.name ? "menu__list-item-name active" : "menu__list-item-name"}>{item.name}</h3>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Menu
