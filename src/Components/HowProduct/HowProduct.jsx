import './HowProduct.css'
import mac1 from '../../img/mac1.png'
import mac2 from '../../img/mac2.png'
import mac3 from '../../img/mac3.png'
import { Link } from 'react-router-dom'

const HowProduct = () => {
  return (
    <div className="HowPr">
      <h1>How Product Work?</h1>
      <div className="container">
        <div className="Hwr">
        <div className="macb1">
        <img src={mac1} alt="" />
        <div className="step">
            <h4>STEP 1</h4>
            <h2>Apply for a product</h2>
            <p>Completing our easy step-by-step application form <br /> gives you access to multiple business with multiple <br /> products. We analyse your business through our <br />proprietary credit analysis technology </p>
        </div>
      </div>
      <div className="macb2">
      <div className="step step2">
            <h4>STEP 2 </h4>
            <h2>Pay fully refundable</h2>
            <p>Product will contactting you instantly to receive <br /> payment of the Application Fee. if no offer of product is <br /> available, your fee will be fully refunded.</p>
        </div>
        <img src={mac2} alt="" className='img2' />
      </div>
      <div className="macb3">
        <img src={mac3} alt="" />
        <div className="step">
            <h4>STEP 3</h4>
            <h2>Completion</h2>
            <p>Product will continue to liase between borrower and <br /> manager to procees and complete a quick and <br /> efficient settlement</p>
        </div>
      </div>
        </div>
      </div>
      <button><Link to={'/error'}>Get in touch with us</Link></button>
    </div>
  )
}

export default HowProduct
