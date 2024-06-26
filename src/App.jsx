
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Headers from './components/Headers/Headers'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { UserProvider } from './context/UserContext/UserState'
import Products from './components/Products/Products'
import Orders from './components/Orders/Orders'
import WishList from './components/WishList/WishList'

function App() {

  return (
    <>

    <BrowserRouter>
              <ProductsProvider>
              <UserProvider>
        <Headers/>
          <Routes>
            <Route path="/" element={<Home/>}/>
                  <Route path="products" element={<Products/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/likes" element={<WishList/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/register" element={<Register/>}/>
          </Routes> 
              </UserProvider>
              </ProductsProvider>
        <Footer/>
    </BrowserRouter>

      
    </>
  )
}

export default App
