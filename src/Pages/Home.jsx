import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/apiCall';
import Toprated from '../Component/Cards/Toprated';
import Displaycards from '../Component/Cards/Displaycards';
import Heading from '../Component/Heading';
const Home = () => {
  const dispatch = useDispatch()
  const obj = useSelector((state) => state.user);
  useEffect(() => {
    const api = "https://dummyjson.com/products?limit=28"
    productList({ api }, dispatch);
  }, []);

  return (
    <div className=''>

      {
        obj.loading ? <div className='w-[full] m-auto flex justify-center'>loading...</div>
          :
          <div className='w-[95%] flex-col flex m-auto'>
            <div className='h-[65vh] w-full '>
              <Heading name={"Top Rated"} />
              <Toprated />
            </div>
            <div>
              <Heading name={"Our Products"} />
              <Displaycards />
            </div>


          </div>
      }
    </div>
  )
}

export default Home