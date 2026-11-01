import './OurClient.css'
import airbnb from '../../img/Airbnb.png'
import google from '../../img/Google.png'
import microsoft from '../../img/Microsoft.png'
import fedex from '../../img/FedEx.png'
import { Link } from 'react-router-dom'


const OurClients = () => {
    return (
      <div className='Ourclient'>
        <h1>Our Clients</h1>
        <div className="googls">
            <div className="gogls1">
            <Link to={'https://ru.airbnb.com/'}><img src={airbnb} alt="" /></Link>
            <Link to={'https://www.google.com/'}><img src={google} alt="" /></Link>
            </div>
            <div className="gogls2">
            <Link to={'https://www.microsoft.com/ru-ru'}><img src={microsoft} alt="" /></Link>
            <Link to={'https://www.fedex.com/global/choose-location.html'}><img src={fedex} alt="" /></Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default OurClients