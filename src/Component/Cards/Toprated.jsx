import React from 'react' 
import { useSelector } from 'react-redux'
const Toprated = () => {
  const products = useSelector((state) => state.user.product); 
  return (
    <>

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