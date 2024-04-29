import { useState } from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import About from './pages/About'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
