import { useNavigate } from "react-router"
import Image from "../Image/Image"
import UserButton from "../UserButton/UserButton"
import "./TopBar.css"

function TopBar() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?search=${e.target[0].value}`);
  }

  return (
    <div className="topBar">
      {/* Search */}
      <form onSubmit={handleSubmit} className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </form>

      {/* User */}
      <UserButton />
    </div>
  )
}

export default TopBar