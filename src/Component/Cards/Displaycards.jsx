import React from 'react'
import Heading from '../Heading'
import { useSelector } from 'react-redux'
const Displaycards = () => {
  const obj = useSelector((state) => state.user.product)
  return (
    <div>
      <div className=''>
        <Heading name={"Our Products"} />
        <div className='flex md:justify-around items-center justify-center m-auto w-full flex-wrap '>

          {
            obj.map((pro, i) => (
              <div key={i} className='flex flex-col justify-center items-center w-[90%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-10px)] my-2 rounded-lg border-2 overflow-hidden'>
                <div className='h-[34vh] overflow-hidden object-cover flex justify-center w-full bg-white'>
                  <img src={pro?.images[0]} alt="" />
                </div>
                <div className='w-full bg-blue-50'>
                  <div className='w-[90%] flex m-auto flex-col'>
                    <div className='w-full flex justify-center'> {pro.title} </div>
                    <div className='flex justify-between items-center'>
                      <div className='text-red-800'>${pro.price} <span className='text-blue-500'>(⭐{pro.rating.toFixed(1)})</span></div>
                      <div>Add to cart</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
      </div>
    </div>
  )
}

export default Displaycards