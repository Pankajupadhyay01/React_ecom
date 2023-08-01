import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Footer from './Component/Footer';
const App = () => {
  return (

    <BrowserRouter>
      <div className="">

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  )
}

export default App