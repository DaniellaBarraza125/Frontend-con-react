
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Headers from './components/Headers/Headers'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import PrintedProducts from './components/Products/PrintedProducts'

function App() {

  return (
    <>

    <BrowserRouter>
        <Headers/>
        <ProductsProvider>
                    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="products" element={<PrintedProducts/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes> 
        </ProductsProvider>
        <Footer/>
    </BrowserRouter>

      
    </>
  )
}

export default App
