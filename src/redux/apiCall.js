import axios from "axios"
import { updateStart, updateProduct, updateErr } from './productSlice';

export const productList = async (dispatch) => {
    try {
        await axios.get("https://dummyjson.com/products?limit=50").then(res => {
            dispatch(updateProduct(res.data))
        })
    } catch (error) {
        console.log(error)
    }
}

