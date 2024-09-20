import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const url = "http://localhost:8888"
    const [product_list, setProductList] = useState([])
    const [category_list, setCategogryList] = useState([])

    const fetchProductList = async () => {
        try {
            const productResponse = await axios.get(`${url}/api/product/list`)
            setProductList(productResponse.data.data)
        } catch (error) {
            console.error('Error fetching product list: ', error)
        }


    }

    const fetchCategoryList = async () => {
        try {
            const categoryResponse = await axios.get(`${url}/api/category/list`)
        setCategogryList(categoryResponse.data.data)
        } catch (error) {
            console.error('Error fetching category list: ', error)
        }
        
    }

    useEffect(() => {
        async function loadData() {
            await fetchProductList()
            await fetchCategoryList()
        }
        loadData();

    }, [])

    const contexValue = {
        product_list,
        category_list
    }
    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider