import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './view/page/Main/Main'
import MyForm from './view/common/FromSave/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Main></Main>}>
        <Route path='new' element={<MyForm></MyForm>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
