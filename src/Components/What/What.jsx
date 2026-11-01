import './What.css'
import Elipse1 from '../../img/Ellipse1.png'
import Elipse2 from '../../img/Ellipse2.png'
import Elipse3 from '../../img/Ellipse3.png'
import yulduz from '../../img/yulduz.png'

const What = () => {
  return (
    <div className='What'>
      <h1>What Clients Say</h1>
      <p>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
      <div className="container">
        <div className="prod">
        <div className="baho">
            <img className='yul' src={yulduz} alt="" />
            <p>Product helps you see how many <br /> more days you need to work to <br /> reach your financial goal.</p>
            <div className="prof">
                <img src={Elipse1} alt="" />
                <h4><span>Wahid Ari </span><br /> Designer</h4>
            </div>
        </div>
        <div className="baho">
            <img className='yul' src={yulduz} alt="" />
            <p>Product helps you see how many <br /> more days you need to work to <br /> reach your financial goal.</p>
            <div className="prof">
                <img src={Elipse2} alt="" />
                <h4><span>Wahid Ari </span><br /> Designer</h4>
            </div>
        </div>
        <div className="baho">
            <img className='yul' src={yulduz} alt="" />
            <p>Product helps you see how many <br /> more days you need to work to <br /> reach your financial goal.</p>
            <div className="prof">
                <img src={Elipse3} alt="" />
                <h4><span>Wahid Ari </span><br /> Designer</h4>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default What
