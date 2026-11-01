import './Navbar.css'
import logo from '../../img/logo.png'
import darkk from '../../img/dark.png'
import menu from '../../img/menu.png'
import menu2 from '../../img/menu2.png'
import yopish from '../../img/yopish.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (themes) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [linkk, setLink] = useState('')
  const changetheme = () => {
    const rootElement = document.documentElement;
    const ent = document.getElementById('Entr')
    if(isDarkMode){
      rootElement.classList.remove('dark')
    }
    else{
      rootElement.classList.add('dark')
    }
    setIsDarkMode(!isDarkMode)
    if(isDarkMode){
      ent.classList.remove('enterbackg')
    }
    else{
      ent.classList.add('enterbackg')
    }
  }
  const [isMenu, setIsMenu] = useState(false)
  const mennyu = () => {
    const menuu = document.getElementById("nav")
    if(isMenu){
      menuu.classList.remove('qayt')
    }
    else{
      menuu.classList.add('qayt')
    }
    setIsMenu(!isMenu)
  }
  const ortga = () => {
    const menuu = document.getElementById("nav")
    menuu.classList.remove('qayt')
  }
  const signppage = () =>{
    const Signuppage = document.getElementById("Signuppage")
    const signp = document.getElementById("signp")
    Signuppage.style.scale = "1"
    signp.style.scale = "1"
  }
  const signInpage = () =>{
    const Signuppage = document.getElementById("SignInpage")
    const signp = document.getElementById("sigin")
    Signuppage.style.scale = "1"
    signp.style.scale = "1"
  }
  return (
    <div className='Navbar'>
      <div className="container">
        <div className="Navbar_left">
          <img src={logo} alt="" />
          <h1>Product</h1>
        </div>
        <div className="Navbar_right">
        <div className="navbar_right" id='nav'>
          <button className="orqaga" onClick={ortga}><img src={yopish} alt="" /></button>
          <Link className={`nav-link ${linkk === 'prd' ? 'aclink' : 'noactibe'}`} onClick={()=>setLink('prd')} to={'/'}>Product</Link>
          <Link className={`nav-link ${linkk === 'pri' ? 'aclink' : 'noactibe'}`} onClick={()=>setLink('pri')} to={'/pricing'}>Pricing</Link>
          <Link className={`nav-link ${linkk === 'cus' ? 'aclink' : 'noactibe'}`} onClick={()=>setLink('cus')} to={'/customers'}>Customers</Link>
          <Link className={`nav-link ${linkk === 'res' ? 'aclink' : 'noactibe'}`} onClick={()=>setLink('res')} to={'/resources'}>Resources</Link>
          <div className="btn">
            <button className='sign in' onClick={signInpage}>Sign In</button>
            <button className='sign up' onClick={signppage}>Sign Up</button>
          </div>
        </div>
        <button className="menyu" onClick={mennyu}><img src={isDarkMode ? menu2 : menu} alt="" /></button>
        <button onClick={changetheme} className="darkmode"><img src={darkk} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
