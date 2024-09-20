import React from 'react'
import './Cart.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart__item">
        <div className="cart__items-title">
          <h4>Item</h4>
          <h4>Name</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Size</h4>
          <h4>Total</h4>
          <h4>Remove</h4>
        </div>
        <hr />
        <div className="cart__items-item">
          <img src={assets.productImg} alt="" className="cart__items-item-img" />
          <p>Capuchino</p>
          <p>$2</p>
          <p>2</p>
          <p>M</p>
          <p>$4</p>
          <p><FontAwesomeIcon icon={faTrash} /></p>
        </div>
        <hr />

        <div className="cart__items-item">
          <img src={assets.productImg} alt="" className="cart__items-item-img" />
          <p>Capuchino</p>
          <p>$2</p>
          <p>2</p>
          <p>M</p>
          <p>$4</p>
          <p><FontAwesomeIcon icon={faTrash} /></p>
        </div>
        <hr />

        <div className="cart__items-item">
          <img src={assets.productImg} alt="" className="cart__items-item-img" />
          <p>Capuchino</p>
          <p>$2</p>
          <p>2</p>
          <p>M</p>
          <p>$4</p>
          <p><FontAwesomeIcon icon={faTrash} /></p>
        </div>
        <hr />
      </div>

      <div className="cart__bottom">
        <div className="cart__bottom-voucher">
          <span>HanCoffee Voucher</span>
          <a className='cart__bottom-voucher-link' href="#">Type or select code</a>
        </div>

        <hr />

        <div className="cart__bottom-order">
          <div className="cart__bottom-order-total">
            <span>Total Payment</span>
            <span>$4</span>
          </div>

          <button onClick={() => navigate('/pay')} className="cart__bottom-order-btn">Order</button>

        </div>


      </div>

    </div>
  )
}

export default Cart
