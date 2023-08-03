import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/apiCall'
import Toprated from '../Component/Toprated'
const Home = () => {
  const dispatch = useDispatch()
  const obj = useSelector((state) => state.user)
  useEffect(() => {
    const api = "https://dummyjson.com/products?limit=50"
    productList({ api }, dispatch)
  }, [])


  return (
    <div className=''>

      {
        obj.loading ? "Loading..."
          :
          <div className='w-[95%] flex-col flex m-auto'>
            <Toprated />
            
          </div>
      }
    </div>
  )
}

export default Home