import Customers from './pages/Customers/Customers'
import Pricing from './pages/Pricing/Pricing'
import Product from './pages/Product/Product'
import Resources from './pages/Resources/Resources'
import { Route, Routes, useLocation } from 'react-router-dom'
import Error404 from './Components/Error404/Error'
import SignUp from './Components/SignUp/SignUp'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import SignIn from './Components/SignIn/SignIn'
import { useState } from 'react'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

const App = () => {
  const [mode, setMode] = useState('')
  const setTheme = () =>{
    setMode(!mode)
  }
  const { pathname } = useLocation()
  return (
    <div className={mode ? "dark" : ""}>
      { pathname == "/" || pathname == "/customers" || pathname == "/pricing" || pathname == "/resources" || pathname == "/sinup" ? <Navbar themes={setTheme} /> : ""  }

      <ScrollToTop />
          <Routes>
            <Route path='/' element={<Product />}/>
            <Route path='/customers' element={<Customers />}/>
            <Route path='/pricing' element={<Pricing />}/>
            <Route path='/resources' element={<Resources />}/>
            <Route path='/sinup' element={<SignUp />}/>
            <Route path='/sinin' element={<SignIn />}/>
            <Route path='*' element={<Error404 />} />
            <Route path='/error' element={<Error404 />} />
          </Routes>
      { pathname == "/" || pathname == "/customers" || pathname == "/pricing" || pathname == "/resources" || pathname == "/sinup" ? <Footer /> : ""  }

    </div>
  )
}

export default App
