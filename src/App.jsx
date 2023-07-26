import { useState } from 'react'
import './App.css'
import {NavBar} from './components/NavBar/NavBar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { categoria } from './pages/Categoria';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
const routes = createBrowserRouter(createRoutesFromElements(
      <Route element={<NavBar/>}> 

        <Route path="/" element={<Home />} />
         <Route path="/item/:id" element={<Detail />} />
         <Route path="/categoria/:id" element={<categoria/>} /> 
      </Route> 
))
function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    
      
        
    </div>
  )
}

export default App


