
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Flowfooter from './component/footer'
import Flownavbar from './component/navbar'
import Signup from './component/Signup'

import Gift from './pages/gift'
import Home from './pages/home'
import Login from './pages/login'
import Flowmenu from './pages/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <BrowserRouter>
    <Flownavbar></Flownavbar>
   <Routes>
  
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/gift" element={ <Gift/>}></Route> 
    <Route path="/menu" element={<Flowmenu/>}></Route> 
    <Route path="/Signup" element={<Signup/>}></Route>
   </Routes>
   <Flowfooter></Flowfooter>
   </BrowserRouter>
    
    </>
     ) 
}

export default App
