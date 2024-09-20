import React from 'react'
import './PlaceOrder.css'
const Order = () => {
  return (
    <div className='order'>
      <div className="order__left">
        <div className="order__left-delivery">
          <h2 className="order__left-delivery-title">Delivery Information</h2>
          <div className="order__left-delivery-type">
            <input className="delivery__name" placeholder='Name'/>
            <input className="delivery__phone" placeholder='Phone'/>
            <input className="delivery__address" placeholder='Address'/>
          </div>
        </div>

        <div className="order__left-pay">
          <h2 className="order__left-pay-title">Payment Methods</h2>
          <div className="order__left-pay-list">
            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">Tiền mặt</label>
            </div>

            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">ZaloPay</label>
            </div>

            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">MoMo</label>
            </div>

            <div className="order__left-pay-list-item">
              <input type="radio" />
              <label htmlFor="">Ngân hàng</label>
            </div>
          </div>
        </div>
      </div>

      <div className="order__right">
        <div className="order__right-product">
          <h2>Selected Products</h2>
          <div className="order__right-product-body">
            <div className="order__right-product-list">
              <div className="order__right-product-list-item">
                <span>2 x </span><p>Capuchino</p>
                <span>M</span>
                <span>$2</span>
              </div>

              <div className="order__right-product-list-item">
                <span>2 x </span><p>Capuchino</p>
                <span>M</span>
                <span>$2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order__right-price">
          <div className="order__right-price-delivery">
            <span>Delivery charges</span><span>$0.12</span>
          </div>
        </div>

        <div className="order__right-total">
          <div className="order__right-total-left">
            <span>Total </span><span>$0.12</span>
          </div>

          <button className='order__right-total-btn'>Order</button>
        </div>
      </div>
    </div>
  )
}

export default Order
