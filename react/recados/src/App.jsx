import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('')

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice(data.slip.advice)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="card">
      <div className="message_section">
        <h1>{advice}</h1>
        <button className='new_message_button' onClick={fetchAdvice}>Novo Conselho</button>
      </div>
    </div>
  )
}

export default App
