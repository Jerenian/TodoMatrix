import { Outlet} from "react-router-dom"
import InputField from "../UI/InputField"
import Header from "./Header/Header"
const Layout = () => {
  return (
    <div>
        <Header></Header>
        <InputField/>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout