import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const data = useSelector((state) => state.cart)
  console.log(data);
  return (
    <div>


      {
        data.cart.length == 0 ? "no data" :
          data.cart.map((pro,i) => (
            <div key={i}>
              {pro.detail.id} <br />
              {pro.detail.title} <br />
              {pro.detail.thumbnail}

            </div>
          ))
      }
    </div>
  )
}

export default Cart