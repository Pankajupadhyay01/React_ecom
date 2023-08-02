import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/apiCall'
const Home = () => {
  const dispatch = useDispatch()
  const obj = useSelector((state) => state.user)
  useEffect(() => {
    const api = "https://dummyjson.com/products?limit=50"
    productList({ api }, dispatch)
  }, [])


  return (
    <div>
      {
        obj.loading ? "Loading..."
          :
          <div>
            gh
          </div>
      }
    </div>
  )
}

export default Home