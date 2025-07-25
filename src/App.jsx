import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './componants/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    </>
  )
}

export default App
