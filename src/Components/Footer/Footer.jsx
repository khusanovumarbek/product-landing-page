import logo from '../../img/logo.png'
import insta from '../../img/Instagram.png'
import twitter from '../../img/Twitter.png'
import facebook from '../../img/Facebook.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <div className="Footer">
          <div className="container">
            <div className="foter">
              <div className="foter_left">
                <div className="flogo">
                <img src={logo} alt="" />
                <h2>Product</h2>
                </div>
                <div className="ficon">
                  <Link to={'https://www.instagram.com/'}><img src={insta} alt="" /></Link>
                  <Link to={'https://www.facebook.com/'}><img src={facebook} alt="" /></Link>
                  <Link to={'https://x.com/login'}><img src={twitter} alt="" /></Link>
                </div>
              </div>
              <div className="foter_center1">
                <h4>Resource</h4>
                <p>About Us</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>FAQ</p>
              </div>
              <div className="foter_center2">
                <h4>Legal Stuff</h4>
                <p>Disclaimer</p>
                <p>Financing</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
              <div className="foter_right">
                <h4>knowing you're always on <br /> the best energy deal.</h4>
                <div className="inp"><input type="text" /></div>
                <button>Sign up Now</button>
              </div>
            </div>
          </div>
          <p className='made'>Made With Love By Figmaland All Right Reserved</p>
        </div>
  )
}

export default Footer
