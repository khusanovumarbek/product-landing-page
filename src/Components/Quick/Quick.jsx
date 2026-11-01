import './Quick.css'
import Avatar1 from '../../img/Avator.png'
import Avatar2 from '../../img/Avator2.png'
import Avatar3 from '../../img/Avator3.png'
import Avatar4 from '../../img/Avator4.png'
import { Link } from 'react-router-dom'


const Quick = () => {
  return (
    <div className='Quick' id='quick'>
      <h1>Quick & Easy Process</h1>
      <p className='do'>Do you require some help for your project: Conception workshop, <br />
      prototyping, marketing strategy, landing page, Ux/UI?</p>
      <div className="container">
      <div className="prf">
        <div className="profil">
          <div className="profil1">
            <img src={Avatar1} alt="" />
            <p>I can take care of your pitch</p>
          </div>
          <div className="profil2">
            <p>I can design you website</p>
            <img src={Avatar2} alt="" />
          </div>
        </div>
        <div className="profil">
          <div className="profil3">
            <p>I can prototype your app</p>
            <img src={Avatar4} alt="" />
          </div>
        <div className="profil4">
            <img src={Avatar3} alt="" />
            <p>I can take care of your pitch</p>
          </div>
        </div>
      </div>
      </div>
      <button><Link to={'/error'}>Contact our expert</Link></button>
    </div>
  )
}

export default Quick
