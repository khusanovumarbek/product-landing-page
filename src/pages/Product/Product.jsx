import Collab from "../../Components/Collab/Collab"
import Cont from "../../Components/Cont/Cont"
import Custo from "../../Components/Custo/Custo"
import Join2 from "../../Components/Join2/Join2"
import Management from "../../Components/Management/Management"
import PriceTable from "../../Components/PriceTable/PriceTable"
import Quick from "../../Components/Quick/Quick"
import SignIn from "../../Components/SignIn/SignIn"
import SignUp from "../../Components/SignUp/SignUp"
import WasBuilt from "../../Components/WasBuilt/WasBuilt"
import What from "../../Components/What/What"
import Workat from "../../Components/Workat/Workat"

const Product = () => {
  return (
    <div>
      <Workat />
      <WasBuilt />
      <Management />
      <Custo />
      <Collab />
      <Quick />
      <Cont />
      <PriceTable />
      <What />
      <Join2 />
      <SignUp />
      <SignIn />
    </div>
  )
}

export default Product
