import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/cart'

const Cart = () => {
  const data = useSelector((state) => state.cart) 
  console.log(data);
  const dispatch = useDispatch()
  const func = (id)=>{
      dispatch(removeCart({id}))
  }
  return (
    <div>


      {
        data.cart.length == 0  ? "no data" :
          data.cart.map((pro,i) => (
            <div key={i}>
              {pro.id} <br />
              {pro.title} <br />
              {pro.thumbnail}

              <div onClick={()=>func(pro.id)}>remove</div>
            </div>
          ))
      }
    </div>
  )
}

export default Cart