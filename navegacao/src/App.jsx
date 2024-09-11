import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Ambush from './pages/Ambush'
import Viagens from './pages/Viagens'

function App() {
  const [pagina, setPagina] = useState(<Ambush />)


  return (
    <>

    <nav>
      <button onClick={ () => setPagina(<Home />) }>Home</button>
      <button onClick={ () => setPagina(<Viagens />) }>Viagens</button>
      <button onClick={ () => setPagina(<Ambush />) }>Clear/Safe path</button>
    </nav>

    <div>
      { pagina }
    </div>
    </>
  )
}

export default App
