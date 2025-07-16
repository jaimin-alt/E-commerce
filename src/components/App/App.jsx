import React from 'react'
import './App.css'
import Navbar from '../nav/Navbar'
import Home from '../../pages/home/Home'
import Footer from '../footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router'
import Shop from '../../pages/shop/Shop'
import Cart from '../../pages/cart/Cart'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import { Provider } from 'react-redux'
import CartStore from '../../store/Cartstore'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div className='app'>
    <BrowserRouter>
    <Provider store={CartStore}>
        <ToastContainer position="top-right" autoClose={2000} theme='dark'
/>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <footer>
      <Footer/>
    </footer>
    </Provider>
    </BrowserRouter>
    </div>
  )
}

export default App