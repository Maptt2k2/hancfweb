import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../common/library/query'
import { useNavigate } from 'react-router-dom'
import './ListCategory.css'
import { toast } from 'react-toastify'
import { PATH_DASHBOARD } from '../../../common/routes/path'
import { BASE_URL } from '../../../config'
import { assets } from '../../../assets/assets'

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        const response = await axiosInstance.get('/api/category/')
        if (response.data.success) {
            setCategories(response.data.data)
        } else {
            toast.error('Error fetching product list')
        }
    }

    // const handleEdit = (categoryId) => {
    //     navigate(`/edit-category/${categoryId}`);
    // };

    // const handleDelete = async (categoryId) => {
    //     try {
    //         await axiosInstance.delete(`/api/categories/${categoryId}`);
    //         setCategories(categories.filter(category => category._id !== categoryId));
    //         toast.success('Category deleted successfully');
    //     } catch (error) {
    //         console.error('Error deleting category:', error);
    //         toast.error('Failed to delete category');
    //     }
    // };

    const handleAddCategory = () => {
        navigate(PATH_DASHBOARD.general.category.add)
    }

    return (
        <div className="category-list-container">
            <h1>Category Management</h1>
            <button
                className="category-list-btn-add"
                onClick={handleAddCategory}
            >
                Add Category
            </button>
            <div className="category-list-table">
                <div className="category-list-table-header">
                    <b>Name</b>
                    <b>Image</b>
                    <b>Edit</b>
                    <b>Delete</b>
                </div>
                {categories.map((item, index) => (
                    <div key={index} className="category-list-table-row">
                        <p>{item.name}</p>
                        <img
                            className="category-list-product-img"
                            src={item.image}
                            alt={item.name}
                        />
                        <div
                            className="category-list-action-icon"
                            onClick={() => handleEditProduct(item._id)}
                        >
                            <img src={assets.edit_icon} alt="Edit" />
                        </div>
                        <div
                            className="category-list-action-icon"
                            onClick={() => removeProduct(item._id)}
                        >
                            <img src={assets.delete_icon} alt="Delete" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryList
