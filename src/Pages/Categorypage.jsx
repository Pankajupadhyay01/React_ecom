import React, { useEffect } from 'react'
import Heading from '../Component/Heading'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/apiCall'

const Categorypage = () => {
  const name = useParams().data;
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.user);
  useEffect(() => {
    const api = `https://dummyjson.com/products/category/${name}`
    productList({ api }, dispatch)
  }, [name]) 
  return (
    <div className='w-[95%] flex flex-col m-auto'>
      <Heading name={name} />
      {
        arr.loading ?
          <div>loading..</div>
          :
          <div>
            {
              arr.product.map((pro, i) => (
                <div key={i}>
                  {pro.title}
                </div>
              ))
            }
          </div>
      }

    </div>
  )
}

export default Categorypage