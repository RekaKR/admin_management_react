import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="container">
        <img className="logo" alt="DPD logo" src="./assets/DPD_logo.png" />
        <h1>Administration</h1>
      </div>

      <div className="links">
        <Link to="tasks"><p>Tasks</p></Link>
        <Link to="divisions"><p>Divisions</p></Link>
        <Link to="colleagues"><p>Colleagues</p></Link>
        <Link to="users"><p>Users</p></Link>
        <Link to="addresses"><p>Addresses</p></Link>
        <Link to="routes"><p>Routes</p></Link>
        <Link to="logistics"><p>Logistics</p></Link>
        <Link to="settings"><p>Settings</p></Link>
      </div>
    </div>
  )
}

export default SideBar
