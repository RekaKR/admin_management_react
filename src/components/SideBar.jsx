const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="container">
        <img className="logo" alt="DPD logo" src="./assets/DPD_logo.png" />
        <h1>Administration</h1>
      </div>

      <div className="links">
        <p>Tasks</p>
        <p>Divisions</p>
        <p>Colleagues</p>
        <p>Users</p>
        <p>Addresses</p>
        <p>Routes</p>
        <p>Logistics</p>
        <p>Settings</p>
      </div>
    </div>
  )
}

export default SideBar
