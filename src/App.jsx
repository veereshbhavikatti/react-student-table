import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Studenttable from './StudentTables/Studenttable'
import Cratestudents from './StudentTables/Cratestudents'
import Editstudent from './StudentTables/Editstudent'
import ViewDetails from './StudentTables/ViewDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Studenttable/>}></Route>
        <Route path='/student/create' element={<Cratestudents/>}></Route>
        <Route path='/student/edit/:studentname' element={<Editstudent/>}></Route>
        <Route path='/student/view/:studentname' element={<ViewDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
