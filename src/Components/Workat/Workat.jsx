import './Workat.css'
import workat from '../../img/workat.png'
import 'boxicons'
import { Link } from 'react-router-dom'


const Workat = () => {
  return (
    <div className="Workat">
      <div className="container">
            <div className="wc_at">
            <div className="text">
                <h1>Work  at the speed <br /> of thought</h1>
                <p>Tools, tutorials, design and innovation experts, <br /> all in one place! The most intuitive way to <br /> imagine your next user experience.</p>
                <div className="wbtn">
                    <button className='gets'><Link to={'/error'}>Get started</Link> </button>
                    <button className='watch'><box-icon name='right-arrow' type='solid' color='#02897a' ></box-icon> <Link to={'/error'}>Watch the Video</Link></button>
                </div>
            </div>
            <div className="img">
                <img src={workat} alt="" />
            </div>
            </div>
      </div>
    </div>
  )
}

export default Workat
