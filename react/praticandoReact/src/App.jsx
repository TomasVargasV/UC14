import React from 'react'
import Titulo from './assets/components/Titulo/Titulo'
import Paragrafo from './assets/components/Paragrafo/Paragrafo'
import Lista from './assets/components/Lista/Lista'
import Imagem from './assets/components/Imagem/Imagem'
import Botao from './assets/components/Botao/Botao'
import { tarefas } from './utils/tarefas'
import morganImage from './assets//img/morgan.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Titulo nome={'Tomás'} />
      <Paragrafo />
      <Imagem link={morganImage} alt='Arthur Morgan' />
      <Lista itens={tarefas} />
      <Botao texto={'Clique aqui'} />
    </div>
  )
}

export default App
