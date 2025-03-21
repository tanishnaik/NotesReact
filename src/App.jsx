import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Archieve } from './Pages/Archieve'
import { Bin } from './Pages/Bin'
import { Important } from './Pages/Important'

function App() {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/archieve'element={<Archieve/>}></Route>
      <Route path='/bin'element={<Bin/>}></Route>
      <Route path='/important' element={<Important/>}></Route>

    </Routes>
  )
  

 
}

export default App;
