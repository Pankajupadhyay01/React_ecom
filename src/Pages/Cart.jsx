import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, setInc, setdec } from '../redux/cart'
import Heading from '../Component/Heading'

const Cart = () => {
  const data = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  // remove from cart function 
  const func = (id) => {
    dispatch(removeCart({ id }))
  }

  // quantity increment decrement function 
  const qyt_func = (id, way) => {
    if (way == "inc") {
      dispatch(setInc({ id }))
    }
    else {
      dispatch(setdec({ id }))
    }
  }

  return (
    <div className='w-[95%] flex-col flex m-auto'>
      <Heading name="Your Cart" />

      {
        data.cart.length == 0 ? "Ooops.. No product " :
          data.cart.map((pro, i) => (
            <div key={i} className='flex flex-col justify-center border-2 w-full space-x-5 h-auto '>

              {/* cart product detail div*/}
              <div className='flex flex-col sm:flex-row w-full m-2 overflow-hidden object-cover justify-center items-center'>
                <img className='md:w-[20vw] w-full h-[200px] md:h-[180px] ' src={pro.detail.thumbnail} alt="" />


                <div className='mx-10 w-full flex sm:flex-row flex-col justify-center items-center md:justify-between'>
                  {/* left container */}
                  <div className=''>
                    <div className='text-lg font-bold'>
                      {pro.detail.title}
                    </div>
                    Brand:{pro.detail.brand}
                  </div>

                  {/* right container */}
                  <div className='flex flex-col justify-center items-center space-y-2'>
                    <div className=' flex justify-center items-center text-center'>
                      <span className='bg-blue-800 w-[30px] text-white text-lg cursor-pointer' onClick={() => qyt_func(pro.detail.id, "decr")}>
                        -
                      </span>
                      <input className='w-[60px] border-2 text-center' onChange={() => pro.qyt} value={pro.qyt} type="text" />
                      <span className='bg-blue-800 w-[30px] text-white text-lg cursor-pointer' onClick={() => qyt_func(pro.detail.id, "inc")}>
                        +
                      </span>

                    </div>

                    <div>
                      $ {pro.detail.price * pro.qyt}

                    </div>
                  </div>

                </div>
              </div>
              {/* cart product detail div ended */}

              {/* buy now and remove button  */}
              <div className='flex space-x-8 my-2'>
                <button className='flex bg-blue-800 border-1 px-3 text-white font-medium py-1' onClick={() => func(pro.detail.id)}>Remove</button>
                <button className='flex bg-blue-800 border-1 px-3 text-white font-medium py-1'>Buy Now</button>
              </div>

            </div>
          ))
      }
    </div>
  )
}

export default Cart