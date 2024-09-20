import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../common/library/query'
import { toast } from 'react-toastify'
import './Edit.css'
const EditProduct = () => {
    const { productId } = useParams()

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        image: null,
    })

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosInstance.get(
                    `/api/product/${productId}`
                )
                if (response.data.success) {
                    const { name, description, category, price } =
                        response.data.data
                    setProductData({ name, description, category, price })
                } else {
                    toast.error('Failed to fetch product details')
                }
            } catch (error) {
                console.error('Error fetching product details:', error)
                toast.error('Failed to fetch product details')
            }
        }

        fetchProduct()
    }, [productId])

    const handleChange = (event) => {
        const { name, value } = event.target
        setProductData({ ...productData, [name]: value })
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setProductData({ ...productData, image: file })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const formData = new FormData()
            formData.append('name', productData.name)
            formData.append('description', productData.description)
            formData.append('category', productData.category)
            formData.append('price', productData.price)
            if (productData.image) {
                formData.append('image', productData.image)
            }

            const response = await axiosInstance.put(
                `/api/product/${productId}`,
                formData
            )

            if (response.data.success) {
                toast.success(response.data.message)
                // Optionally update state with new data from response
                if (response.data.data) {
                    setProductData(response.data.data)
                }
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error('Error updating product:', error)
            toast.error('Failed to update product')
        }
    }

    return (
        <div className="edit-product">
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        value={productData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditProduct
