import './WasBuilt.css'
import icon3 from '../../img/icon3.png'
import icon4 from '../../img/icon4.png'
import icon5 from '../../img/icon5.png'
import icon6 from '../../img/icon6.png'
import SignUp from '../SignUp/SignUp'

const WasBuilt = () => {
  const signppage = () =>{
    const Signuppage = document.getElementById("Signuppage")
    const signp = document.getElementById("signp")
    Signuppage.style.scale = "1"
    signp.style.scale = "1"
  }
  return (
    <div className="Wasbuild" id='wasbuild'>
      <h1>Product  was Built Specifically <br />
      for You</h1>
      <div className="container">
        <div className="prwas">
        <div className="vector">
          <img src={icon3} alt="" /> <br />
          <h2>First click tests</h2><br />
          <p>While most people enjoy <br /> casino gambling,</p>
        </div>
        <div className="vector">
          <img src={icon4} alt="" /> <br />
          <h2>First click tests</h2><br />
          <p>Sports betting, lottery and <br /> bingo playing for the fun</p>
        </div>
        <div className="vector">
          <img src={icon5} alt="" /> <br />
          <h2>First click tests</h2><br />
          <p>The Myspace page defines <br /> the individual.</p>
        </div>
        <div className="vector">
          <img src={icon6} alt="" /> <br />
          <h2>First click tests</h2><br />
          <p>Personal choices and the <br /> overall personality of the <br /> person. </p>
        </div>
        </div>
      </div>
      <button onClick={signppage}>SIGN UP NOW</button>
      <SignUp />
    </div>
  )
}

export default WasBuilt

