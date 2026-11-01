import './WhyChoose.css'
import icon3qizil from '../../img/icon5.png'
import icon1 from '../../img/icon3.png'
import icon2 from '../../img/icon4.png'

const WhyChoose = () => {
  return (
    <div className="WhyChoos">
      <h1>Why Choose Product?</h1>
      <div className="container">
      <div className="whychs">
        <div className="vector">
          <img src={icon1} alt="" /> <br />
          <h2>Special Business</h2>
          <p>Product helps you see how many <br /> more days you need to work <br /> to reach your financial goal <br /> for the month and year.</p>
        </div>
        <div className="vector">
          <img src={icon2} alt="" /> <br />
          <h2>Instant Result</h2>
          <p>Product helps you see how many <br /> more days you need to work <br /> to reach your financial goal <br /> for the month and year.</p>
        </div>
        <div className="vector">
          <img src={icon3qizil} alt="" /> <br />
          <h2>Fastest way to organize</h2>
          <p>Product helps you see how many <br /> more days you need to work <br /> to reach your financial goal <br /> for the month and year.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WhyChoose
