import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myObje = {
    usename:"Govind",
    age: 23
  }

  return (
    <>
    <Card username = "Govind" 
    btnText = "Click Me"/>
    <Card username= "Neha"
    btnText = "Visit Me"

    />

    </>
  )
}

export default App
