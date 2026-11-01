import HowProduct from '../../Components/HowProduct/HowProduct'
import Join from '../../Components/Join/Join'
import Join2 from '../../Components/Join2/Join2'
import OurClients from '../../Components/OurClient/OurClient'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import WhyChoose from '../../Components/WhyChoose/WhyChoose'

const Customers = () => {
  return (
    <div>
      <OurClients />
      <WhyChoose />
      <HowProduct />
      <Join />
      <Join2 />
      <SignUp />
      <SignIn />
    </div>
  )
}

export default Customers
