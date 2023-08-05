import React from 'react'
import Heading from '../Heading' 
import { useSelector } from 'react-redux'
const Toprated = () => {
  const products = useSelector((state) => state.user.product); 
  return (
    <>

      <Heading name={"Top Rated"} />
      {
        products.map((obj, i) => (

          <div key={i}>
            {obj.rating >= 4.8 ? obj.rating : ""}
          </div>
        ))
      }
    </>
  )
}

export default Toprated;