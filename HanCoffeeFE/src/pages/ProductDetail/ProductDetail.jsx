import React from 'react'
import './ProductDetail.css'
import { assets } from '../../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const navigate = useNavigate();
  return (
    <div className='product__detail'>
      <div className="product__detail-name">
        <h1>Capuchino</h1>
      </div>

      <div className="product__detail-body">
        <div className="product__detail-img">
          <img src={assets.productImg} alt="" />

        </div>
        <div className="product__detail-contain">
          <div className="product__detail-content">



            <div className="product__detail-content-desc">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint repudiandae, asperiores nobis veritatis autem omnis fugiat id quo, eum consectetur ex quis necessitatibus accusantium. Asperiores libero sapiente iste architecto.</p>
            </div>

            <div className="product__detail-content-size">
              <span>Size: </span>
              <ul className="size__list">
                <li className="size__list-item">S</li>
                <li className="size__list-item">M</li>
                <li className="size__list-item">L</li>
              </ul>
            </div>

            <div className="product__detail-content-price">
              <span>Giá: </span>
              <div className="price__product">$2</div>
            </div>


          </div>

          <button onClick={()=> navigate('/order')} className='product__detail-content-buy-btn'>Đặt mua ngay</button>

        </div>


      </div>
    </div>
  )
}

export default ProductDetail
