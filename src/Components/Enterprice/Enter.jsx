import { Link } from 'react-router-dom'
import './Enter.css'

const Enter = () => {
  return (
    <div className='Enter' id='Entr'>
     <div className="container">
      <div className="entr">
      <h2>ENTERPRISE</h2>
      <h1>Are you interested  in a custom-tailored plan?</h1>
      <p>Product is a set of advanced features for really large teams with projects.</p>
      <button><Link to={'/error'}>Get in touch with us</Link></button>
    </div>
      </div>
     </div>
  )
}
 
export default Enter
