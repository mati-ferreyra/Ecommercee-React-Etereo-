import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartView from './components/CartView/CartView'
import { CartProvider} from './context/CartContext'
import { createContext } from 'react'
import Checkout from './components/Checkout/Checkout'


function App() {

const Context = createContext()


  return(
    <>
    <BrowserRouter >
      <CartProvider>
        <NavBar />
          <Routes >
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
      </CartProvider >
    </BrowserRouter >
    </>
  ) 
}

export default App
