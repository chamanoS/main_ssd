import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/login/Login"
import Signup from './pages/register/Signup'
import Home from "./pages/home/Home"
import Orders from './pages/OrderManage/Orders'
import Clerk from './pages/storeClerk/Clerk'
import Admin from './pages/admin/Admin'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/clerk' element={<Clerk/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App