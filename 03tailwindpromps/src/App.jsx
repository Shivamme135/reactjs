import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "shivam",
    age: 24
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-3 rounded mb-4' >tailwind test</h1>
    <Card channelName='shivam gf'  btnText = 'clickMe'/>
    <Card channelName='shivam secondgf' btnText = "visitHere" />
    </>
  )
}

export default App
