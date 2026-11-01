import './Pris.css'
import Univer1 from '../../img/univer1.png'
import Univer2 from '../../img/univer2.png'
import Univer3 from '../../img/univer3.png'
import Pris1 from '../../img/Pris.png'
import Pris2 from '../../img/Pris2.png'
import { useState, useEffect } from 'react'

const Pris = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1225);
      };
  
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
      }
  
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize);
        }
      };
    }, []); 

  return (
    <div className='Pris'>
      <h1>Product is being used with great effects alongside:</h1>
      <div className="container">
        <div className="prs">
            <div className="img">
                <img src={isMobile ? Pris2 : Pris1} alt="" />
            </div>
            <div className="text">
                <div className="ptext">
                    <div className="univer">
                        <img src={Univer1} alt="" />
                        <h3>Enterpreneur</h3>
                    </div>
                    <p>Product is a great way to help medium and samall enterprise <br /> owners achieve their goals</p>
                </div>
                <div className="ptext">
                    <div className="univer uni">
                        <img src={Univer2} alt="" />
                        <h3>Accountants</h3>
                    </div>
                    <p>Whether you are working on contract with clients, or on other key <br /> accounting documents, Product is for you</p>
                </div>
                <div className="ptext">
                    <div className="univer uni">
                        <img src={Univer3} alt="" />
                        <h3>Universities</h3>
                    </div>
                    <p>Organize university projects and have documents easily <br /> graded online with Product</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pris
