import './Collab.css'
import Coll from '../../img/Collab.png'

const Collab = () => {
  return (
    <div className='Collab'>
      <div className="container">
      <div className="clb">
      <div className="text">
        <h4 className="opt">
        Optimisation for
        </h4>
        <h2>Collaborative</h2>
        <p className='Few'>Few would argue that, despite the advancements of <br /> feminism over the past three decades, women still face a <br /> double standard when it comes to their behavior. </p>
        <h4 className='Acces'>Accessory makers</h4>
        <p className="while">While most people enjoy casino gambling, sports betting, <br /> lottery and bingo playing for the fun</p>
        <h4 className='alter'>Alterationists</h4>
        <p className="ifyou">If you are looking for a new way to promote your business <br /> that won’t cost you more money, </p>
        </div>
        <div className="img">
            <img src={Coll} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Collab
