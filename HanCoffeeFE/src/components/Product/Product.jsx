import React, { useContext, useState } from 'react'
import './Product.scss'
import { StoreContext } from '../../context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const Product = () => {

  const url = "http://localhost:8888"
  const navigate = useNavigate();
  const { product_list } = useContext(StoreContext)
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false);
  const handleOpen = (product, event) => {
    event.stopPropagation()
    setSelectedProduct(product)
    setShowModal(true)
  };

  const addProductToCart = () => {
    notify()
    handleClose()
  }
  const [selectedProduct, setSelectedProduct] = useState(null)
  const notify = () => {
    toast.success("Add to cart successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }

  return (

    <div className='product' id='product'>
      <h1 className='product__heading'>reach for your favorite beverage</h1>

      <div className="product__list">
        {product_list.map((item, index) => {
          return (

            <div onClick={() => navigate('/productDetail')} className="product__list-item">
              <img src={url + "/images/" + item.image} alt="" className="item-img" />
              <div className="item__content">
                <div className="item__content-name">
                  <p>
                    {item.name}
                  </p>
                </div>
                <div className="item__content-price">
                  <span>
                    ${item.price}
                  </span>
                </div>


              </div>

              <div onClick={(event) => handleOpen(item, event)} className="item__content-add-cart">
                <FontAwesomeIcon icon={faPlusCircle} />

              </div>
            </div>
          )
        })}
      </div>
      <ToastContainer />

      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        contentLabel="Thông báo"
        className="product_modal"
        overlayClassName="product_modal-overlay"
      >
        <div className="product_modal-header">
          <p>Thêm sản phẩm vào giỏ hàng</p>
          <i onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </i>
        </div>

        {selectedProduct && (
          <div className='product_modal-body'>
            <img src={`${url}/images/${selectedProduct.image}`} alt="" className="product_modal-body-img" />
            <h3 className='product_modal-body-name'>{selectedProduct.name}</h3>
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
            <div className="product_modal-body-quantity">
              <span>Số lượng</span>
              <button>-</button>
              <span>1</span>
              <button>+</button>

            </div>
            <p className='product_modal-body-price'>${selectedProduct.price}</p>
            <button onClick={addProductToCart} className='product_modal-body-add'>Thêm</button>
          </div>
        )}

      </Modal>
    </div>

  )
}

export default Product
