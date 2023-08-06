import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productDetail } from '../../redux/apiCall';

const Datailcards = () => {
  const id = useParams().data;
  const dispatch = useDispatch()
  const result = useSelector((state) => state.user)
  useEffect(() => {
    const api = `https://dummyjson.com/products/${id}`
    productDetail({ api }, dispatch)
  }, [])
  return (
    <>
      {
        result.loading ? "loading..." :


          <div>
            <div className='flex my-4 flex-col md:flex-row w-[90%] md:w-[80%] justify-between m-auto items-center'>
              <div className='md:w-[60%] overflow-hidden'>
                <img className='w-full overflow-hidden' src={result.detail.thumbnail} alt="" />
              </div>
              <div className='md:w-[35%] space-y-4'>
                <div className='text-xl font-semibold text-center'>{result.detail.title}</div>
                <div className='text-sm font-normal text-center text-blue-600 cursor-pointer'>{result.detail.brand}</div>
                <div>{result.detail.description}</div>
                <div className='flex justify-between items-center'>
                  <div className='font-bold'>${result.detail.price}</div>
                  <div className='font-bold text-yellow-600 flex items-center'>{result.detail.rating > 4.5 ? "Top Rated" : result.detail.rating} </div>
                </div>
                <div className={`${result.detail.stock < 35 ? "text-red-500" : "text-blue-500"}`}>{result.detail.stock < 35 ? "few stock left" : "In Stock"}</div>
                {/* <div className='flex justify-center space-x-4 items-center'>
            <Link className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-[#388e3c]' href="">Add To Cart</Link>
            <Link className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-[#388e3c]' href={`/buy/${id}`}>Buy Now</Link>
          </div> */}
              </div>
            </div>

          </div>

      }
    </>
  )
}

export default Datailcards