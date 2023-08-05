import React from 'react';
import Navbar from './Component/LayoutFile/Navbar';
import Detailcards from './Component/Cards/Datailcards'
import Home from './Pages/Home';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Footer from './Component/LayoutFile/Footer'; 
import Categorypage from './Pages/Categorypage';
const App = () => {
  return (

    <BrowserRouter>
      <div className="">

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/category/:data' element={<Categorypage />} />
          <Route exact path='/product/detail/:data' element={<Detailcards />} />

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  )
}

export default App