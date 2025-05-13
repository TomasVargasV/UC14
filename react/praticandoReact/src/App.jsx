import React from 'react'
import Titulo from './assets/components/Titulo/Titulo'
import Paragrafo from './assets/components/Paragrafo/Paragrafo'
import Lista from './assets/components/Lista/Lista'
import Imagem from './assets/components/Imagem/Imagem'
import Botao from './assets/components/Botao/Botao'
import personagens from './utils/personagens'
import morganImg from './assets//img/morgan.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Titulo />
      <Paragrafo texto={'2018'} />
      <Imagem link={morganImg} alt='Arthur Morgan' />
      <div className="char">
        Personagens:
        <Lista itens={personagens} />
      </div>
      <Botao texto={'Trailer'} />
    </div>
  )
}

export default App
