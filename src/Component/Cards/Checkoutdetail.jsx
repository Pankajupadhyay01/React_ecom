import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Quantity from '../Quantity'

const Checkoutdetail = () => {
  const detail = useSelector((state) => state.checkout.userPurchase)
  const Qyt = useSelector((state) => state.checkout)
  const data = [
    {
      id: 1,
      head: "LOGIN",
      name: "John Doe"
    },
    {
      id: 2,
      head: "Delivery Address",
      name: "1000, Landmark area Capetown, dist , XXXXXX - 393933"
    },
  ]

  return (
    <>
      {
        data.map((pro, i) => (
          <div className='my-5' key={i} >
            <div className='md:text-[24px] bg-blue-100 mb-2 text-black font-medium px-[10px] text-[22px]' >
              {pro.head}
            </div>
            <div className={`ease-in-out duration-75	`}>
              {pro.name}
            </div>
          </div>
        ))
      }

      <div className='mb-5'>
        <div className='md:text-[24px] font- bg-blue-100 mb-2 text-black font-medium px-[10px] text-[22px]' >
          Order Summary
        </div>
        <div className='sm:flex w-full items-center justify-between'>
          <div className='sm:w-[20vw] flex justify-center flex-1 items-center w-full'>
            <img src={`${detail.images[0]}`} alt="" />
          </div>
          <div className='flex-1'>
            <h3 className='flex justify-center capitalize text-[22px] font-semibold text-blue-900'>{detail.title}</h3>
            <p className='flex justify-center capitalize text-[18px] gap-2'>{detail.category} <span>-{Math.round(detail.discountPercentage)}% off</span></p>
            <div className='flex justify-around'>
              <div className='text-blue-700'>
                ${detail.price}
              </div>
              <div className='font-bold text-yellow-600'>
                ⭐ {detail.rating}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='md:text-[24px] font- bg-blue-100 mb-2 text-black font-medium px-[10px] text-[22px]' >
          Payment
        </div>
        <div className='sm:flex w-full items-center justify-between'>
          This is a Front End Project. You can check the functionality of Add to cart/Checkout/seach
          <span className='text-[28px] text-green-800'>Thank You </span>
        </div>
      </div>
    </>
  )
}

export default Checkoutdetail