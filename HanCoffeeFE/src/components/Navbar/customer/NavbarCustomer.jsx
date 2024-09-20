import React, { useState } from 'react'
import './NavbarCustomer.css'
import { assets } from '../../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState('home')
    const navigate = useNavigate()
    return (
        <div className="navbar__customer">
            <div className="navbar__wrap">
                <div onClick={() => navigate('/')} className="navbar__logo">
                    <img
                        src={assets.logoBranch}
                        alt="logo"
                        className="navbar__logo-branch"
                    />
                </div>

                <ul className="navbar__menu">
                    <li
                        onClick={() => setMenu('home')}
                        className={menu === 'home' ? 'navbar__active' : ''}
                    >
                        <a href="/">home</a>
                    </li>
                    <li
                        onClick={() => setMenu('menu')}
                        className={menu === 'menu' ? 'navbar__active' : ''}
                    >
                        <a href="#menu">menu</a>
                    </li>
                    <li
                        onClick={() => setMenu('product')}
                        className={menu === 'product' ? 'navbar__active' : ''}
                    >
                        <a href="#product">product</a>
                    </li>
                    <li
                        onClick={() => setMenu('download')}
                        className={menu === 'download' ? 'navbar__active' : ''}
                    >
                        <a href="#download">download</a>
                    </li>
                </ul>

                <div className="navbav__right">
                    <div className="navbav__right-search">
                        <input
                            type="text"
                            className="search__input"
                            placeholder="Tìm sản phẩm"
                        />
                        <div className="search__history">
                            <h3 class="search__history-heading">
                                Lịch sử tìm kiếm
                            </h3>
                            <ul class="search__history-list">
                                <li class="search__history-item">
                                    <a href="">Milk Coffe</a>
                                </li>
                                <li class="search__history-item">
                                    <a href="">Capuchino</a>
                                </li>
                            </ul>
                        </div>
                        <i className="search__icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </i>
                    </div>

                    <div
                        onClick={() => navigate('/cart')}
                        className="navbav__right-cart"
                    >
                        <i className="cart__icon">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </i>
                        <span className="cart__number-product">3</span>
                    </div>

                    <div className="navbav__right-user">
                        <img
                            src={assets.userImg}
                            alt=""
                            className="user__img"
                        />
                        <span className="user__name">quốc dinh</span>
                        <div className="user__select">
                            <ul className="user__select-list">
                                <li
                                    onClick={() => navigate('/user')}
                                    className="user__select-item"
                                >
                                    Tài khoản của tôi
                                </li>
                                <li className="user__select-item">Đơn mua</li>
                                <li className="user__select-item">Đăng xuất</li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="navbav__right-user-not-active">s
            <img src={assets.userImg} alt="" className="user__img" />
            <span className="user__name">Đăng nhập</span>
            <div className="user__select">
              <ul className='user__select-list'>
                <li className='user__select-item'>Tài khoản của tôi</li>
                <li className='user__select-item'>Đơn mua</li>
                <li className='user__select-item'>Đăng xuất</li>
              </ul>
            </div>
          </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
