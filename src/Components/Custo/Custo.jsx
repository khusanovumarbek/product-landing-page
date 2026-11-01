import './Custo.css'
import Custos from '../../img/Custo.png'

const Custo = () => {
  return (
    <div className='Custo'>
      <div className="container">
        <div className="cst">
        <div className="img">
            <img src={Custos} alt="" />
        </div>
        <div className="text">
            <div className="text">
                <h4>Easier decision making for</h4>
                <h2>Customer Support</h2>
                <p>The Myspace page defines the individual, his or her <br /> characteristics, traits, personal choices and the overall <br /> personality of the person. </p>
                <div className="three">
                    <div className="three_div">
                        <div className="ptichka pt1">&#10003;</div>
                        <p>Never worry about overpaying for your <br /> energy again. </p>
                    </div>
                    <div className="three_div">
                        <div className="ptichka pt2">&#10003;</div>
                        <p>We will only switch you to energy companies <br /> that we trust and will treat you right</p>
                    </div>
                    <div className="three_div">
                        <div className="ptichka pt3">&#10003;</div>
                        <p>We track the markets daily and know where the <br /> savings are.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Custo
