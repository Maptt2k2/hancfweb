import React from 'react'
import './Order.css'
const Order = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-20 w-20 object-cover rounded-md mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Quantity: 1</p>
          <p className="text-red-500 font-bold">${product.price}</p>
        </div>
        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Order
