import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayPage from './Components/DisplayPage'
import MainPage from './Components/MainPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/display' element={<DisplayPage/>}></Route>
      </Routes>
    </>
  )
}

export default App