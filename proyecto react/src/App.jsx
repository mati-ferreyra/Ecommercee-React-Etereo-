import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return(
    <>
    <BrowserRouter >
        <NavBar />
      <Routes >
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter >
    </>
  ) 
}

export default App
