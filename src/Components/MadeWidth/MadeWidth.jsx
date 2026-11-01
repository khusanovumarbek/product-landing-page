import './MadeWidth.css'
import Gmade1 from '../../img/greatk.png'
import Gmade2 from '../../img/gback2.png'
import Gprof from '../../img/greaticon.png'

const MadeWidth = () => {
  return (
    <div className='MadeW'>
      <div className="container">
        <div className="Gmadew">
            <div className="text">
              <h1>Great Business <br /> made with Product.</h1>
              <p className='bld'>Build better customer relationships easily messaging <br /> that provides a more personal experience for you and <br /> your customers.</p>
              <div className="ginp">
                <input type="text" placeholder='Enter your email adress' />
                <button>Join Now</button>
              </div>
              <div className="gprof">
                <img src={Gprof} alt="" />
                <p className='gprf'>Join over <span>4,000+</span> other</p>
              </div>
            </div>
            <img className='gimg1' src={Gmade1} alt="" />
            <img className='gimg2' src={Gmade2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MadeWidth
