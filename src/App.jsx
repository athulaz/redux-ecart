import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wish from './pages/Wish'
import Header from './components/Header'
import Footer from './components/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>


<Routes>


<Route path = '/' element= {<Home/>}/>

<Route path = '/view/:id' element= {<View/>}/>
<Route path = '/cart' element= {<Cart/>}/>
<Route path = '/wish' element= {<Wish/>}/>


</Routes>

<Footer/>



    </>
  )
}

export default App
