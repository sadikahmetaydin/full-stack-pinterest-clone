import "./LeftBar.css"
import Image from "../Image/Image"
import { Link } from "react-router"

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <Image path="/general/logo.png" alt="" className="logo" />
        </Link>

        <Link to="/" className="menuIcon">
          <Image path="/general/home.svg" alt="" />
        </Link>

         <Link to="/create" className="menuIcon">
          <Image path="/general/create.svg" alt="" />
        </Link>

         <Link to="/" className="menuIcon">
          <Image path="/general/updates.svg" alt="" />
        </Link>

         <Link to="/" className="menuIcon">
          <Image path="/general/messages.svg" alt="" />
        </Link>
      </div>

       <Link to="/">
          <Image path="/general/settings.svg" alt="" />
        </Link>
    </div>
  )
}

export default LeftBar