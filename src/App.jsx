import { useState } from 'react'
import './App.scss'
import {NavBar} from './components/NavBar/NavBar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Categoria } from './pages/Categoria';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { CartProvider } from './state/Cart.context';
import { Cart } from './pages/Cart';
const routes = createBrowserRouter(createRoutesFromElements(
      <Route element={<NavBar/>}> 

        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="/categoria/:id" element={<Categoria/>} /> 
        <Route path="/cart"element={<Cart/>}/>
      </Route> 
))
function App() {
  return (
    <div>
      <CartProvider>
          <RouterProvider router={routes} />
      </CartProvider>
      
    
      
        
    </div>
  )
}

export default App


