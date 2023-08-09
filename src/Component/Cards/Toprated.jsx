import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Toprated = () => {
  const products = useSelector((state) => state.user.product);
  const [slide, setslide] = useState(1)
  return (
    <div className='h-[50vh] w-full relative overflow-hidden flex'>
      <div className={`h-[350px] flex absolute left-[0]`} style={{ transform: `translateX(-${slide * 100}vw)` }}>
        {products.map((pro, i) => (

          <div key={i} className='w-[100vw] flex items-center justify-center'>
            <div className='w-full h-full bg-[crimson]'>
              {pro.id}
            </div>
          </div>
        ))
        }

      </div>
      <div>next</div>
      <div>pre</div>
    

    </div >
  )
}

export default Toprated;