import axios from "axios"
import { updateStart, updateProduct, updateErr } from './productSlice';
export const productList = async ({ api }, dispatch) => {
    dispatch(updateStart())
    try {
        await axios.get(`${api}`).then(res => {
            dispatch(updateProduct(res.data))
        })
    } catch (error) {
        dispatch(updateErr())
    }
}

 

// export const productCategory = async ({ name }, dispatch) => {
//     dispatch(updateStart())
//     try {
//         await axios.get(`https://dummyjson.com/products/category/${name}`).then(res => {
//             dispatch(updateCategory(res.data))
//         })
//     } catch (error) {
//         dispatch(updateErr())
//         console.log(error);
//     }
// }

// export const productSearch = async ({ query }, dispatch) => {
//     dispatch(updateStart())
//     try {
//         await axios.get(`https://dummyjson.com/products/search?q=${query}`).then(res => {
//             dispatch(updateProduct(res.data))
//         })
//     } catch (error) {
//         dispatch(updateErr())
//     }
// }

// export const productDetail = async ({ id }, dispatch) => {
//     dispatch(updateStart())
//     try {
//         await axios.get(`https://dummyjson.com/products/${id}`).then(res => {
//             dispatch(updateDetail(res.data))
//         })
//     } catch (error) {
//         dispatch(updateErr())
//         console.log(error);
//     }
// }
