import './Management.css'
import manage from '../../img/manag.png'

const Management = () => {
  return (
    <div className='Management'>
      <div className="container">
        <div className="mnc">
        <div className="text">
        <h4 className="effor">
        Effortless Validation for
        </h4>
        <h2>Management</h2>
        <div className="myscope">
        The Myspace page defines the individual, his or her <br /> characteristics, traits, personal choices and the overall <br /> personality of the person. 
        </div>
        <h4 className='Acces'>Accessory makers</h4>
        <p className="while">While most people enjoy casino gambling, sports betting, <br /> lottery and bingo playing for the fun</p>
        <h4 className='alter'>Alterationists</h4>
        <p className="ifyou">If you are looking for a new way to promote your business <br /> that won’t cost you more money, </p>
        </div>
        <div className="img">
        <img src={manage} alt="" />
      </div>
        </div>
      </div>
    </div>
  )
}

export default Management
