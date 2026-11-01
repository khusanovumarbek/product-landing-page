import './Join.css'
import icon8 from '../../img/icon8.png'
import icon7 from '../../img/icon7.png'

const Join = () => {
  return (
    <div className="Join">
        <h1>Join thousand of other who have <br /> already received offers</h1>
        <div className="buss">
            <div className="busines">
                <img src={icon8} alt="" />
                <h2>Business</h2>
                <p>Cash Flow <br /> Asset Backed <br /> Receivables Finance</p>
                <h4>Find the best business product</h4>
            </div>
            <div className="entprice">
                <img src={icon7} alt="" />
                <h2>Enterprise</h2>
                <p>Site Acquisition <br /> Bridge <br /> Development Financing</p>
                <h4>Find the best business product</h4>
            </div>
        </div>
    </div>
  )
}

export default Join
