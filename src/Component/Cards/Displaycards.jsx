import React from 'react'
import Heading from '../Heading'
const Displaycards = () => {
  return (
    <div>
      <div className=''>
        <Heading name={"Our Products"} />
        <div className='flex md:justify-between items-center justify-center m-auto w-full flex-wrap'>
          <div className='flex flex-col justify-center items-center w-[calc(20%-10px)] my-2'>
            <div className='w-full h-[34vh] overflow-hidden object-cover flex'>
              <img src="https://i.dummyjson.com/data/products/12/thumbnail.jpg" alt="" />
            </div>
            <div>text</div>
          </div>
          <div className='flex flex-col justify-center items-center w-[calc(20%-10px)] my-2'>
            <div className='w-full h-[34vh] overflow-hidden object-cover flex'>
              <img src="https://i.dummyjson.com/data/products/12/thumbnail.jpg" alt="" />
            </div>
            <div>text</div>
          </div>
          <div className='flex flex-col justify-center items-center w-[calc(20%-10px)] my-2'>
            <div className='w-full h-[34vh] overflow-hidden object-cover flex'>
              <img src="https://i.dummyjson.com/data/products/12/thumbnail.jpg" alt="" />
            </div>
            <div>text</div>
          </div>
          <div className='flex flex-col justify-center items-center w-[calc(20%-10px)] my-2'>
            <div className='w-full h-[34vh] overflow-hidden object-cover flex'>
              <img src="https://i.dummyjson.com/data/products/12/thumbnail.jpg" alt="" />
            </div>
            <div>text</div>
          </div>
          <div className='flex flex-col justify-center items-center w-[calc(20%-10px)] my-2'>
            <div className='w-full h-[34vh] overflow-hidden object-cover flex'>
              <img src="https://i.dummyjson.com/data/products/12/thumbnail.jpg" alt="" />
            </div>
            <div>text</div>
          </div>
          <div className='flex flex-col justify-center items-center w-[calc(20%-10px)] my-2'>
            <div className='w-full h-[34vh] overflow-hidden object-cover flex'>
              <img src="https://i.dummyjson.com/data/products/12/thumbnail.jpg" alt="" />
            </div>
            <div>text</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Displaycards