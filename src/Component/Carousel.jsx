import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Carousel = () => {
    const products = useSelector((state) => state.user.product);
    const [slide, setslide] = useState(0)

    setTimeout(() => {
        setslide(slide<products.length-1?slide+1:0)
    }, 4500);
    return (
        <div className='h-[65vh] '>
            <div className='w-full h-full relative overflow-hidden flex'>
                <div className={`h-full flex absolute left-[0]`} style={{ transform: `translateX(-${slide * 100}vw)` }}>
                    {products.map((pro, i) => (

                        <div key={i} className='transition ease-in-out delay-150 w-[100vw] flex items-center justify-center '>
                            <div className='w-full h-full bg-[crimson]'>
                                <img src={pro?.images[0]} alt="" srcSet="" /> 
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Carousel