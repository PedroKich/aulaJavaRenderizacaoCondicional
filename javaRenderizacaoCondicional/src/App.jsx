import { useState } from 'react'
import './App.css'
import UsuarioLogado from './components/UsuarioLogado'
import AreaParaAdultos from './components/AreaParaAdultos'
import EfetueLogin from './components/EfetueLogin'

function App() {
  const [usuario, setUsuario] = useState(true)
  const [idade, setIdade] = useState(0)

  return (
    <>
      <div className='renderContainer'>
        { usuario && <UsuarioLogado /> }
        <button onClick={ () => {setUsuario(true)} }>LogIn</button>
        <button onClick={ () => {setUsuario(false)} }>LogOff</button>

        <div className='renderContainer'>

          
          <button onClick={ () => {setIdade(idade -1)} }>-</button>

          {idade}

          <button onClick={ () => {setIdade(idade +1)} }>+</button>
          
          { idade >= 18 && <AreaParaAdultos /> }


        </div>

        <div className='renderContainer'>

          { usuario ? <UsuarioLogado /> : <EfetueLogin />}


        </div>



      </div>
    
      </>    
  )
}

export default App
