import { useState } from 'react'
import './App.css'
import {NavBar} from './components/NavBar/NavBar'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <ItemListConteiner greeting={'Bienvenidos'}/>
          
        
    </div>
  )
}

export default App


