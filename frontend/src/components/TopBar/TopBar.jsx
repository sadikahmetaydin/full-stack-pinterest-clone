import Image from "../Image/Image"
import UserButton from "../UserButton/UserButton"
import "./TopBar.css"

function TopBar() {
  return (
    <div className="topBar">
      {/* Search */}
      <div className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>

      {/* User */}
      <UserButton />
    </div>
  )
}

export default TopBar