import { Link } from 'react-router-dom'
import './ContUs.css'
import insta from '../../img/Instagram.png'
import twitter from '../../img/Twitter.png'
import facebook from '../../img/Facebook.png'

const ContUs = () => {
  return (
    <div className="ContUs">
      <h1>Contact Us</h1>
      <p>Need more detailed information? <br /> Get in touch with us.</p>
      <div className="ficon">
                  <Link to={'https://www.instagram.com/'}><img src={insta} alt="" /></Link>
                  <Link to={'https://www.facebook.com/'}><img src={facebook} alt="" /></Link>
                  <Link to={'https://x.com/login'}><img src={twitter} alt="" /></Link>
      </div>
      <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5789996274416!2d-122.4296612735868!3d37.77646861206136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a196ede719%3A0x2fb5607634331f2f!2z0KXQsNC50LXRgSDQktGN0LvQu9C4LCDQodCw0L0t0KTRgNCw0L3RhtC40YHQutC-LCDQmtCw0LvQuNGE0L7RgNC90LjRjywg0KHQqNCQ!5e0!3m2!1sru!2s!4v1733214811778!5m2!1sru!2s" frameborder=""></iframe>
    </div>
  )
}

export default ContUs
