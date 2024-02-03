import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './view/page/Main/Main'
import MyForm from './view/common/FromSave/MyForm'
import MyFormUpdate from './view/common/FromUpdate/MyFormUpdate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Main></Main>}>
        <Route path='new' element={<MyForm></MyForm>}></Route>
        <Route path='update' element={<MyFormUpdate></MyFormUpdate>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
