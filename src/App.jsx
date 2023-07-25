import { useState } from 'react'
import './App.css'
import {NavBar} from './components/NavBar/NavBar';
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';
import { ItemCount } from './components/ItemCount/ItemCount';
import { Item } from './components/Item/Item';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';


function App() {
  const [count, setCount] = useState(0)

  const handleCart = (qty) => {
    console.log("La cantidad es", qty);
  };

  return (
    <div>
      <NavBar />
    {/*  <Home/>*/}
      <Detail />
      
        
    </div>
  )
}

export default App


