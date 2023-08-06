import React from 'react'
import Heading from '../Component/Heading'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Displaycards from '../Component/Cards/Displaycards'
const Search = () => {
    const product = useParams().data;
    const loading = useSelector((state) => state.user.loading)
    return (
        <>
            {
                loading? <div className='flex justify-center '>Loading...</div> 
                :
                <div className='w-[95%] flex-col flex m-auto'>
                    <Heading name={`Result for :-  ${product}`} />
                    <Displaycards/>
                </div>
            }
        </>
    )
}

export default Search