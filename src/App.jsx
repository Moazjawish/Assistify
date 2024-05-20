import NavBar from './Components/NavBar/NavBar'
import './Fonts/AGCRegular.ttf'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home/Home'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import SignUp from './Pages/SignUp/SignUp'
import VerifyEmail from './Components/VerifyEmail/VerifyEmail'
import LogoutPopup from './Components/LogoutPopup/LogoutPopup'
const App = () => {
  const [show, setShow] = useState(false);
  const [VerifyShow , setVerifyShow] = useState(false)
  const [accoutnbtn , setAccountbtn] = useState("سجل الدخول")
  
  return (
    <div className='app'>
      <NavBar accoutnbtn = {accoutnbtn} setShow = {setShow}/>
      {(accoutnbtn === 'سجل الدخول' && show)  ?
      <LoginPopup show={show} setAccountbtn={setAccountbtn} setShow={setShow}/>
      :
      <LogoutPopup  show={show} setAccountbtn={setAccountbtn} setShow={setShow}/>}
      <VerifyEmail  setVerifyShow = {setVerifyShow} VerifyShow={VerifyShow}/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up' element={<SignUp setVerifyShow = {setVerifyShow} setShow={setShow} />}/>
      </Routes>
    </div>
  )
}

export default App
